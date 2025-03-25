from app import db

class Validation(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    tel_user = db.Column(db.String(100), db.ForeignKey('user.tel_user'), nullable=False)  # Logistique
    status_validation = db.Column(db.String(50), nullable=False)  # "valide" ou "refuse"
    id_demande = db.Column(db.Integer, db.ForeignKey('demande.id'), nullable=False, unique=True) # Relation avec Demande
    date_validation = db.Column(db.String(100), nullable=False)
    notification = db.Column(db.String(250), nullable=False)  # Notification pour le logistique
    signature_responsable = db.Column(db.String(100), nullable=True)  # Signature du responsable, peut être NULL

    # Définir les relations avec les autres tables
    user = db.relationship('User', backref='validations', lazy=True)  # Relation inverse avec User (logistique)
    demande = db.relationship('Demande', backref='validations', lazy=True)  # Relation inverse avec Demande

    def __init__(self, tel_user, status_validation, id_demande, date_validation, notification, signature_responsable=None):
        self.tel_user = tel_user
        self.status_validation = status_validation
        self.id_demande = id_demande
        self.date_validation = date_validation
        self.notification = notification
        self.signature_responsable = signature_responsable  # Peut être null si non signé par le responsable

    def validate(self, signature_responsable=None):
        """ Valider la demande et ajouter la signature du responsable """
        self.status_validation = 'valide'
        self.signature_responsable = signature_responsable
        # Ajouter ici la logique pour notifier le demandeur et logistique
