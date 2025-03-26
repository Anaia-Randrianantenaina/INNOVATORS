from app.models.demande import Demande
from app.models.user import User
from app import db
from app.models.notification import Notification

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

        # Notifier le logistique
        logistique_users = User.query.filter_by(role_user="logistique").all()  # Récupère tous les logistique
        for logistique in logistique_users:
            notification_logistique = Notification(
                tel_user=logistique.tel_user,  # Utiliser le téléphone du logistique
                type_notification="Nouvelle Demande",
                message=f"Une nouvelle demande de matériel a été créée. Veuillez la traiter.",
                statut="non lue"
            )
            db.session.add(notification_logistique)
        
            # Commit toutes les notifications en même temps
            db.session.commit()

        # Notifier le demandeur
        notification_demandeur = Notification(
            tel_user=tel_user,
            type_notification="Demande Créée",
            message=f"Votre demande '{justification}' a été créée avec succès.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

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

            
    @staticmethod
    def get_demandes_and_notifications(user_tel):
        """ Récupérer les demandes et notifications de l'utilisateur """
        demandes = Demande.query.filter_by(tel_user=user_tel).all()
        notifications = Notification.query.filter_by(tel_user=user_tel).all()
        
        demandes_data = [{"justification": demande.justification_demande, "status": demande.status_demande} for demande in demandes]
        notifications_data = [{"type": notification.type_notification, "message": notification.message, "statut": notification.statut} for notification in notifications]
        
        return demandes_data, notifications_data