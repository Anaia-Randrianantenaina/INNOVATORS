from app import db

class Demande(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    tel_user = db.Column(db.String(100), db.ForeignKey('user.tel_user'), nullable=False)  # Relation avec le modèle User
    status_demande = db.Column(db.String(50), nullable=False)
    justication_demande = db.Column(db.TEXT(2000), nullable=False)
    quantite_demande = db.Column(db.String(100), nullable=False)
    notification_demande = db.Column(db.TEXT(1000), nullable=False)
    date_demande = db.Column(db.TEXT(1000), nullable=False)
    # Définir les relations avec les autres tables
    user = db.relationship('User', backref='demandes', lazy=True)  # Relation inverse avec User
    

    def __init__(self, tel_user, status_demande, justication_demande, date_demande, quantite_demande, notification_demande):
        self.tel_user = tel_user
        self.status_demande = status_demande
        self.justication_demande = justication_demande
        self.quantite_demande = quantite_demande
        self.notification_demande = notification_demande
        self.date_demande = date_demande
