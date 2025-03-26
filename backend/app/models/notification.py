from app import db
from datetime import datetime

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tel_user = db.Column(db.String(100), db.ForeignKey('user.tel_user'), nullable=False)  # Référence à User
    type_notification = db.Column(db.String(100), nullable=False)  # Type de notification, ex: "demande acceptée", "validation en attente"
    message = db.Column(db.Text, nullable=False)  # Message de la notification
    date_notification = db.Column(db.DateTime, default=datetime.utcnow)  # Date de la notification
    statut = db.Column(db.String(50), default='non lue')  # Statut de la notification (lue ou non lue)
    
    # Définir la relation avec User
    user = db.relationship('User', backref='notifications', lazy=True)  # Relation inverse avec User
    
    def __init__(self, tel_user, type_notification, message, statut='non lue', date_notification=None):
        self.tel_user = tel_user
        self.type_notification = type_notification
        self.message = message
        self.statut = statut
        self.date_notification = date_notification or datetime.utcnow()

    def marquer_comme_lue(self):
        """ Marquer la notification comme lue """
        self.statut = 'lue'

    def __repr__(self):
        return f'<Notification {self.id} - {self.message[:20]}...>'
