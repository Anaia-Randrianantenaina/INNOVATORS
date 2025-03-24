from flask import Blueprint
from app.controllers.user_controller import register, login, profile


# Déclarer le blueprint
user_bp = Blueprint('user_bp', __name__)

# Définir les routes
user_bp.route('/login', methods=['POST'])(login)
user_bp.route('/create_user', methods=['POST'])(register)
user_bp.route('/profile', methods=['GET'])(profile)
