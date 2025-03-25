from flask import request, jsonify, make_response
from app.services.user_service import UserService
from app.middleware.access_token import auth_required

def register():
    """Inscription d'un nouvel utilisateur avec confirmation du mot de passe."""
    data = request.get_json()

    photo = data.get('photo')
    nom_user = data.get('nom_user')
    email_user = data.get('email_user')
    role_user = data.get('role_user')
    mot_de_passe = data.get('mot_de_passe')
    confirmation_mot_de_passe = data.get('confirmation_mot_de_passe')
    tel_user = data.get('tel_user')

    # Vérification des champs obligatoires
    if not all([nom_user, email_user, role_user, mot_de_passe, confirmation_mot_de_passe, tel_user]):
        return jsonify({"message": "Tous les champs sont obligatoires."}), 400

    # Inscription de l'utilisateur
    user, error = UserService.register_user(photo, nom_user, email_user, role_user, mot_de_passe, confirmation_mot_de_passe, tel_user)

    if error:
        return jsonify({"message": error}), 400

    return jsonify({"message": "Utilisateur créé avec succès."}), 201


def connexion():
    data = request.get_json()
    tokens, error = UserService.connexion_user(data['tel_user'], data['mot_de_passe'])
    if error:
        return jsonify({"error": error}), 400

    response = make_response(jsonify({"message": "Connexion réussie", "user": data['tel_user']}))
    response.set_cookie('token', tokens['access_token'], httponly=True, secure=True, samesite='Strict', max_age=2592000)
    return response

@auth_required
def profile():
    user = request.user  # Récupération de l'utilisateur authentifié via le middleware
    return UserService.get_user_profile(user)

@auth_required
def deconnexion():
    return UserService.logout()

def demander_reset_mot_de_passe():
    """Contrôleur pour demander un code OTP de réinitialisation."""
    try:
        data = request.get_json()
        tel_user = data.get("tel_user")

        if not tel_user:
            return jsonify({"error": "Le numéro de téléphone est requis."}), 400

        otp, error = UserService.generer_reset_mot_de_passe(tel_user)
        if error:
            return jsonify({"error": error}), 404

        print(f"Envoyer OTP {otp} au numéro {tel_user}")
        return jsonify({"message": "Un code de vérification a été envoyé."}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


def reset_mot_de_passe():
    """Contrôleur pour vérifier le code OTP et réinitialiser le mot de passe."""
    try:
        data = request.get_json()
        tel_user = data.get("tel_user")
        otp = data.get("otp")
        nouveau_mot_de_passe = data.get("mot_de_passe")
        confirmation_nouveau_mot_de_passe = data.get("confirmation_nouveau_mot_de_passe")

        if not all([tel_user, otp, nouveau_mot_de_passe, confirmation_nouveau_mot_de_passe]):
            return jsonify({"error": "Tous les champs sont requis."}), 400

        if nouveau_mot_de_passe != confirmation_nouveau_mot_de_passe:
            return jsonify({"error": "Les mots de passe ne correspondent pas."}), 400

        # Correction : Appel de la méthode UserService au lieu de la fonction elle-même
        error = UserService.reset_mot_de_passe(tel_user, otp, nouveau_mot_de_passe)
        if error:
            return jsonify({"error": error}), 400

        return jsonify({"message": "Mot de passe réinitialisé avec succès."}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
