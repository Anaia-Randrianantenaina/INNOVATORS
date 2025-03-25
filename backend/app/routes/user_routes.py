from flask import Blueprint
from app.controllers.user_controller import register, connexion, profile, deconnexion

user_bp = Blueprint('user_bp', __name__)

user_bp.add_url_rule('/register', 'register', register, methods=['POST'])
user_bp.add_url_rule('/connexion', 'connexion', connexion, methods=['POST'])
user_bp.add_url_rule('/profile', 'profile', profile, methods=['GET'])
user_bp.add_url_rule('/deconnexion', 'deconnexion', deconnexion, methods=['POST'])
