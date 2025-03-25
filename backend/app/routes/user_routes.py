from flask import Blueprint
from app.controllers.user_controller import register, connexion, profile, deconnexion

user_bp = Blueprint('user_bp', __name__)

user_bp.add_url_rule('/register', 'register', register, methods=['POST'])#route pour creer une compte user
user_bp.add_url_rule('/connexion', 'connexion', connexion, methods=['POST']),#pour faireconnecter
user_bp.add_url_rule('/profile', 'profile', profile, methods=['GET']),#route pour afficher les information user
user_bp.add_url_rule('/deconnexion', 'deconnexion', deconnexion, methods=['POST'])#route pour faire deonncete 
