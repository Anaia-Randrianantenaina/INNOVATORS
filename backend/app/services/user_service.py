from app.models.user import User
from app.models.black_liste_token import BlacklistToken
from app import db
from flask_jwt_extended import create_access_token, create_refresh_token
import bcrypt

class UserService:

    @staticmethod
    def register_user(photo, nom_user, email_user, role_user, mot_de_passe, tel_user):
        hashed_password = bcrypt.hashpw(mot_de_passe.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        user = User(photo=photo, nom_user=nom_user, email_user=email_user, role_user=role_user, tel_user=tel_user, mot_de_passe=hashed_password)
        db.session.add(user)
        db.session.commit()
        return user

    @staticmethod
    def connexion_user(tel_user, mot_de_passe):
        user = User.query.filter_by(tel_user=tel_user).first()
        if not user or not bcrypt.checkpw(mot_de_passe.encode('utf-8'), user.mot_de_passe.encode('utf-8')):
            return None, "Identifiants incorrects."

        access_token = create_access_token(identity=user.tel_user)
        refresh_token = create_refresh_token(identity=user.tel_user)

        return {"access_token": access_token, "refresh_token": refresh_token}, None
