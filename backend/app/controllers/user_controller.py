from flask import Blueprint, request, jsonify, make_response
from app.services.user_service import UserService
from werkzeug.exceptions import BadRequest
from flask_jwt_extended import jwt_required, get_jwt_identity

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/create_user', methods=['POST'])
def register():
    try:
        data = request.get_json()
        photo = data['photo']
        nom_user = data['nom_user']
        email_user = data['email_user']
        role_user = data['role_user']
        mot_de_passe = data['mot_de_passe']
        tel_user = data['tel_user']

        # Enregistrer l'utilisateur
        user = UserService.register_user(photo, nom_user, email_user, role_user, mot_de_passe, tel_user)
        return jsonify({
            "message": "User creer successfully",
            "user": {
                "id": user.id,
                "nom_user": user.nom_user,
                "email_user": user.email_user,
                "role_user": user.role_user,
            }
        }), 201

    except KeyError as e:
        return jsonify({"error": f"Missing parameter: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@user_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email_user = data['email_user']
        mot_de_passe = data['mot_de_passe']

        # Vérifier les identifiants
        user = UserService.check_user_credentials(email_user, mot_de_passe)
        if user:
            # Créer un token JWT pour l'utilisateur
            access_token = UserService.create_token(user)

            # Créer la réponse et définir le cookie
            response = make_response(jsonify({
                "message": "Login successful",
                "access_token": access_token,  # Ajout du token ici
                "user": {
                    "id": user.id,
                    "nom_user": user.nom_user,
                    "email_user": user.email_user
                }
            }), 200)


            # Ajouter le token dans un cookie sécurisé
            response.set_cookie('access_token', access_token, httponly=True, secure=True, samesite='Strict')
            return response
        else:
            return jsonify({"error": "Invalid credentials"}), 401

    except KeyError as e:
        return jsonify({"error": f"Missing parameter: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    if user:
        return jsonify({
            "id": user.id,
            "nom_user": user.nom_user,
            "email_user": user.email_user,
            "role_user": user.role_user
        }), 200
    return jsonify({"error": "User not found"}), 404
