from app import db
from datetime import datetime

class Demande(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tel_user = db.Column(db.String(100), db.ForeignKey('user.tel_user'), nullable=False)  # Relation avec le modèle User
    status_demande = db.Column(db.String(50), nullable=False,default='en attente')
    justification_demande = db.Column(db.Text, nullable=False)
    quantite_demande = db.Column(db.String(100), nullable=False)
    notification_demande = db.Column(db.Text, nullable=True)
    date_demande = db.Column(db.DateTime, default=datetime.utcnow)    

    # Définir les relations avec les autres tables
    user = db.relationship('User', backref='demandes', lazy=True)  # Relation inverse avec User

    def __init__(self, tel_user, status_demande, justification_demande, quantite_demande, notification_demande, date_demande=None):
        self.tel_user = tel_user
        self.status_demande = status_demande
        self.justification_demande = justification_demande
        self.quantite_demande = quantite_demande
        self.notification_demande = notification_demande
        self.date_demande = date_demande or datetime.utcnow()
