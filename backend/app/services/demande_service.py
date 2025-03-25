from app.models.demande import Demande
from app.models.user import User
from app import db

class DemandeService:
    @staticmethod
    def ajoute_demande(tel_user, justification, quantite):
        """Créer une nouvelle demande et notifier le logistique"""
        nouvelle_demande = Demande(
            tel_user=tel_user,
            status_demande="en attente",
            justification_demande=justification,
            quantite_demande=quantite,
            notification_demande="Nouvelle demande créée"
        )
        db.session.add(nouvelle_demande)
        db.session.commit()

        # Notifier le logistique (à implémenter)
        DemandeService.notifier_logistique(nouvelle_demande)

        return nouvelle_demande

    @staticmethod
    def obtenir_toutes_les_demandes():
        """Récupérer toutes les demandes"""
        return Demande.query.all()

    @staticmethod
    def notifier_logistique(demande):
        """Notifier le logistique qu'une nouvelle demande a été créée"""
        logistique_users = User.query.filter_by(role_user="logistique").all()
        for logistique in logistique_users:
            print(f"Notification envoyée à {logistique.email_user}: Une nouvelle demande a été créée {demande.justification_demande}.")

