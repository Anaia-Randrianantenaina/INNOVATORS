import jwt
from functools import wraps
from flask import request, jsonify
from app.models.black_liste_token import BlacklistToken
from app.models.user import User
from werkzeug.exceptions import Unauthorized
from config import Config

SECRET_KEY = Config.JWT_SECRET_KEY
def auth_required(f):
    """ Middleware pour protéger les routes avec JWT """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = request.cookies.get('token')

        if not token:
            return jsonify({"error": "Accès refusé, Token manquant"}), 401

        try:
            # Vérifier si le token est en liste noire
            is_blacklisted = BlacklistToken.query.filter_by(token=token).first()
            if is_blacklisted:
                return jsonify({"error": "Session expirée, reconnectez-vous"}), 401

            print(f"Token reçu : {token}")  # Log pour vérifier le token
            # Décoder le token
            decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            print(f"Token décodé : {decoded}")  # Log pour vérifier le décodage

            # Utilise 'sub' 
            if not decoded.get('sub'):
                return jsonify({"error": "Données du token invalides"}), 401

            # Récupérer l'utilisateur avec l'ID dans 'sub'
            user = User.query.filter_by(tel_user=decoded['sub']).first()
            if not user:
                return jsonify({"error": "Utilisateur non trouvé"}), 401

            request.user = user

        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token expiré"}), 403
        except jwt.InvalidTokenError as e:
            print(f"Erreur de token : {e}")  # Log pour afficher l'erreur
            return jsonify({"error": "Token invalide"}), 403

        return f(*args, **kwargs)

    return decorated_function

