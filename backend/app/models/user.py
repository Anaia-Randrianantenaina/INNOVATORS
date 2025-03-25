from app import db
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User(db.Model):
    tel_user = db.Column(db.String(100), primary_key=True,unique=True) 
    photo = db.Column(db.String(100), nullable=False)
    nom_user = db.Column(db.String(50), nullable=False)
    email_user = db.Column(db.String(100), nullable=False, unique=True)
    role_user = db.Column(db.String(100), nullable=False)
    mot_de_passe = db.Column(db.String(100), nullable=False)

    def __init__(self, photo, nom_user, email_user, role_user, mot_de_passe, tel_user):
        self.tel_user = tel_user
        self.photo = photo
        self.nom_user = nom_user
        self.email_user = email_user
        self.role_user = role_user
        self.mot_de_passe = bcrypt.generate_password_hash(mot_de_passe).decode('utf-8')

    def check_password(self, mot_de_passe):
        return bcrypt.check_password_hash(self.mot_de_passe, mot_de_passe)
