from app import db
from datetime import datetime
# Définition du modèle Article
class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    prix = db.Column(db.Float, nullable=False)
    reference = db.Column(db.String(150), nullable=False, unique=True)

    def __init__(self, nom, description, prix):
        self.nom = nom
        self.description = description
        self.prix = prix
        self.reference = f"{nom}-{description}".replace(" ", "_").lower()