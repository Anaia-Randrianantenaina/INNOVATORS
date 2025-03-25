from flask import request, jsonify, make_response
from app.services.user_service import UserService
from app.middleware.access_token import auth_required
from app.models.black_liste_token import BlacklistToken
from app import db

def register():
    data = request.get_json()
    user = UserService.register_user(data['photo'], data['nom_user'], data['email_user'], data['role_user'], data['mot_de_passe'], data['tel_user'])
    return jsonify({"message": "Utilisateur créé", "user": user.tel_user}), 201

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
    user = request.user
    return jsonify({"user": {"tel_user": user.tel_user, "nom_user": user.nom_user, "email_user": user.email_user}}), 200

@auth_required
def deconnexion():
    token = request.cookies.get('token')
    if token:
        blacklist_token = BlacklistToken(token=token)
        db.session.add(blacklist_token)
        db.session.commit()

    response = make_response(jsonify({"message": "Déconnexion réussie"}))
    response.delete_cookie('token')
    return response
