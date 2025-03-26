from app.models.notification import Notification
from app.models.validation import Validation
from app.models.demande import Demande
from app.models.user import User
from app import db
import datetime


class ValidationService:
    @staticmethod
    def valider_demande(id_demande, tel_user_logistique):
        """Valider une demande et notifier le responsable"""
        demande = Demande.query.get(id_demande)
        if not demande:
            return {"message": "Demande introuvable"}, 404
        
        # Effectuer la validation de la demande
        validation = Validation(
            tel_user=tel_user_logistique,
            status_validation="valide",
            id_demande=id_demande,
            date_validation=datetime.datetime.now(),
            notification="Demande validée, en attente de signature."
        )
        db.session.add(validation)
        db.session.commit()

        # Notifier le responsable que la demande a été validée
        responsable_users = User.query.filter_by(role_user="responsable").all()  # Récupère tous les responsables
        for responsable in responsable_users:  # Cette ligne doit être correctement indentée
            notification_responsable = Notification(
                tel_user=responsable.tel_user,  # Remplacez par l'ID ou téléphone du responsable
                type_notification="Demande Validée",
                message="Une demande a été validée et attend votre signature.",
                statut="non lue"
            )
            db.session.add(notification_responsable)
            db.session.commit()

        # Notifier le demandeur que la demande a été validée et est en attente de signature
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Validée",
            message="Votre demande a été validée, en attente de signature.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return validation

    @staticmethod
    def signer_demande(id_demande, tel_user_responsable):
        """Signer la demande et notifier le logistique et le demandeur"""
        demande = Demande.query.get(id_demande)
        if not demande:
            return {"message": "Demande introuvable"}, 404

        # Mettre à jour le statut de la demande comme signée
        demande.status_demande = "signée"
        db.session.commit()

        # Notifier le logistique que la demande a été signée
        logistique_users = User.query.filter_by(role_user="logistique").all()  # Récupère tous les logistique
        for logistique in logistique_users:
            notification_logistique = Notification(
                tel_user=logistique.tel_user,  # Remplacez par l'ID ou téléphone du logistique
                type_notification="Demande Signée",
                message=f"La demande de {demande.justification_demande} a été signée par le responsable.",
                statut="non lue"
            )
            db.session.add(notification_logistique)
            db.session.commit()

        # Notifier le demandeur que sa demande a été signée
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Signée",
            message=f"Votre demande de {demande.justification_demande} a été signée.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return {"message": "Demande signée avec succès."}

    @staticmethod
    def refuser_demande(id_demande, tel_user_logistique):
        """Refuser une demande et notifier le logistique et le demandeur"""
        demande = Demande.query.get(id_demande)
        if not demande:
            return {"message": "Demande introuvable"}, 404

        # Mettre à jour le statut de la demande comme refusée
        demande.status_demande = "refusée"
        db.session.commit()

        # Notifier le logistique que la demande a été refusée
        notification_logistique = Notification(
            tel_user="logistique",  # Remplacez par l'ID ou téléphone du logistique
            type_notification="Demande Refusée",
            message=f"La demande de {demande.justification_demande} a été refusée.",
            statut="non lue"
        )
        db.session.add(notification_logistique)
        db.session.commit()

        # Notifier le demandeur que sa demande a été refusée
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Refusée",
            message=f"Votre demande de {demande.justification_demande} a été refusée.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return {"message": "Demande refusée avec succès."}
