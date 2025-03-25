from flask import Blueprint
from app.controllers.user_controller import register, connexion, profile, deconnexion, demander_reset_mot_de_passe, reset_mot_de_passe


user_bp = Blueprint('user_bp', __name__)

user_bp.add_url_rule('/register', 'register', register, methods=['POST'])  # Route pour créer un compte utilisateur
user_bp.add_url_rule('/connexion', 'connexion', connexion, methods=['POST'])  # Pour connecter l'utilisateur
user_bp.add_url_rule('/profile', 'profile', profile, methods=['GET'])  # Route pour afficher les informations utilisateur
user_bp.add_url_rule('/deconnexion', 'deconnexion', deconnexion, methods=['POST'])  # Route pour déconnecter l'utilisateur

user_bp.add_url_rule('/motDePasseOublie', 'demander_reset_mot_de_passe', demander_reset_mot_de_passe, methods=['POST'])  # Route pour envoyer l'OTP
user_bp.add_url_rule('/resetMotDepasse', 'reset_mot_de_passe', reset_mot_de_passe, methods=['POST'])  # Route pour vérifier l'OTP
