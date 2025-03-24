from app.models.user import User
from app import db
from flask_jwt_extended import create_access_token
from werkzeug.exceptions import BadRequest

class UserService:
    @staticmethod
    def register_user(photo, nom_user, email_user, role_user, mot_de_passe, tel_user):
        """Enregistrer un utilisateur dans la base de données."""
        user = User(photo=photo, nom_user=nom_user, email_user=email_user, role_user=role_user, tel_user=tel_user, mot_de_passe=mot_de_passe)
        user.hash_password()  # Hacher le mot de passe avant de l'enregistrer
        db.session.add(user)
        db.session.commit()
        return user

    @staticmethod
    def get_user_by_email(email_user):
        """Récupérer un utilisateur par son email."""
        return User.query.filter_by(email_user=email_user).first()

    @staticmethod
    def check_user_credentials(email_user, mot_de_passe):
        """Vérifier les informations d'identification de l'utilisateur."""
        user = UserService.get_user_by_email(email_user)
        if not user:
            return None
        if user.check_password(mot_de_passe):
            return user
        return None


    @staticmethod
    def create_token(user):
        """Créer un token JWT pour l'utilisateur."""
        return create_access_token(identity=user.id, fresh=True)

