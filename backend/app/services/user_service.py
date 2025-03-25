from app.models.user import User
from app.models.black_liste_token import BlacklistToken
from app import db
from flask_jwt_extended import create_access_token, create_refresh_token
from flask import jsonify,request,make_response
import bcrypt

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
        user = User.query.filter_by(tel_user=tel_user).first()
        if not user or not bcrypt.checkpw(mot_de_passe.encode('utf-8'), user.mot_de_passe.encode('utf-8')):
            return None, "Identifiants incorrects."

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