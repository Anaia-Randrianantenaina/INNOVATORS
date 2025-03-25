from app import db

class Validation(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    tel_user = db.Column(db.String(100), db.ForeignKey('user.tel_user'), nullable=False)  # Relation avec le modèle User
    status_validation = db.Column(db.String(50), nullable=False)
    # id_demande = db.Column(db.String(100), db.ForeignKey('demande.id_demande'), nullable=False, unique=True)  # Relation avec le modèle Demande
    date_validation = db.Column(db.String(100), nullable=False)
    notification = db.Column(db.String(250), nullable=False)
    signature_responsable = db.Column(db.String(100), nullable=False)
    
    # Définir les relations avec les autres tables
    user = db.relationship('User', backref='validations', lazy=True)  # Relation inverse avec User
    # demande = db.relationship('Demande', backref='validations', lazy=True)  # Relation inverse avec Demande

    def __init__(self, tel_user, status_validation, id_demande, date_validation, notification, signature_responsable):
        self.tel_user = tel_user
        self.status_validation = status_validation
        self.id_demande = id_demande
        self.date_validation = date_validation
        self.notification = notification
        self.signature_responsable = signature_responsable
