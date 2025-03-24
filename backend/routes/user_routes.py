from flask import Blueprint
from controllers.user_controller import UserController

user_bp = Blueprint('user_bp', __name__)

user_bp.route('/all', methods=['GET'])(UserController.get_all_users)
user_bp.route('/create', methods=['POST'])(UserController.create_user)
