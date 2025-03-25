from app.models.user import User
from app.models.black_liste_token import BlacklistToken
from app import db
from flask_jwt_extended import create_access_token, create_refresh_token
from flask import jsonify,request,make_response
import bcrypt
import random
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash


class UserService:

    @staticmethod
    def register_user(photo, nom_user, email_user, role_user, mot_de_passe, confirmation_mot_de_passe, tel_user):
        """Créer un nouvel utilisateur avec vérification du numéro et du mot de passe."""

        # Vérification si le numéro de téléphone existe déjà
        existing_user = User.query.filter_by(tel_user=tel_user).first()
        if existing_user:
            return None, "Ce numéro de téléphone est déjà utilisé."

        # Vérification si les mots de passe correspondent
        if mot_de_passe != confirmation_mot_de_passe:
            return None, "Les mots de passe ne correspondent pas."

        # Hachage du mot de passe
        hashed_password = bcrypt.hashpw(mot_de_passe.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Création de l'utilisateur
        user = User(
            photo=photo,
            nom_user=nom_user,
            email_user=email_user,
            role_user=role_user,
            tel_user=tel_user,
            mot_de_passe=hashed_password
        )

        db.session.add(user)
        db.session.commit()
        return user, None  # Retourne l'utilisateur et `None` en cas de succès

    @staticmethod
    def connexion_user(tel_user, mot_de_passe):
        # Récupération de l'utilisateur par son numéro de téléphone
        user = User.query.filter_by(tel_user=tel_user).first()
        
        # Vérification du mot de passe
        if not user or not check_password_hash(user.mot_de_passe, mot_de_passe):
            return None, "Identifiants incorrects."

        # Création des tokens d'authentification
        access_token = create_access_token(identity=user.tel_user)
        refresh_token = create_refresh_token(identity=user.tel_user)

        return {"access_token": access_token, "refresh_token": refresh_token}, None

    def logout():
        """Gère la déconnexion de l'utilisateur en ajoutant le token à la liste noire."""
        token = request.cookies.get('token')

        if token:
            # Vérifier si le token est déjà en blacklist
            existing_blacklist = BlacklistToken.query.filter_by(token=token).first()
            if not existing_blacklist:
                blacklist_token = BlacklistToken(token=token)
                db.session.add(blacklist_token)
                db.session.commit()

        response = make_response(jsonify({"message": "Déconnexion réussie"}))
        response.delete_cookie('token')  # Supprimer le token côté client
        return response
    @staticmethod
    def get_user_profile(user):
        """Retourne les informations du profil utilisateur."""
        if not user:
            return jsonify({"message": "Utilisateur non trouvé"}), 404

        return jsonify({
            "user": {
                "tel_user": user.tel_user,
                "nom_user": user.nom_user,
                "email_user": user.email_user,
                "photo":user.photo
            }
        }), 200
    @staticmethod   
    def generer_otp():
        """Génère un code OTP à 6 chiffres et une expiration de 10 minutes."""
        otp = str(random.randint(100000, 999999))
        expiration = datetime.utcnow() + timedelta(minutes=10)
        return otp, expiration
    @staticmethod
    def generer_reset_mot_de_passe(tel_user):
        """Génère un OTP pour un user et l'enregistre dans la base de données."""
        user = User.query.filter_by(tel_user=tel_user).first()
        if not user:
            return None, "Numéro de téléphone non trouvé."

        otp = str(random.randint(100000, 999999))
        expiration = datetime.utcnow() + timedelta(minutes=10)

        user.otp = otp
        user.otp_expiration = expiration
        db.session.commit()

        return otp, None # Aucun message d'erreur
    @staticmethod
    def reset_mot_de_passe(tel_user, otp, nouveau_mot_de_passe):
        """Vérifie l'OTP et met à jour le mot de passe du user."""
        user = User.query.filter(
            User.tel_user == tel_user,
            User.otp == otp,
            User.otp_expiration > datetime.utcnow()
        ).first()

        if not user:
            return "Code invalide ou expiré."

        user.mot_de_passe = generate_password_hash(nouveau_mot_de_passe)
        user.otp = None
        user.otp_expiration = None
        db.session.commit()

        return None  # Aucun message d'erreur