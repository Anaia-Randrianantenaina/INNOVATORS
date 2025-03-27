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
        logistique = User.query.filter_by(tel_user=tel_user_logistique).first()

        if not demande:
            return {"message": "Demande introuvable"}, 404
        if not logistique:
            return {"message": "Utilisateur logistique introuvable"}, 404

        # Vérifier si la demande a déjà été validée
        validation_existante = Validation.query.filter_by(id_demande=id_demande).first()
        if validation_existante:
            return {"message": "Cette demande a déjà été validée"}, 400

        # Effectuer la validation de la demande
        validation = Validation(
            tel_user=tel_user_logistique,
            status_validation="valide",
            id_demande=id_demande,
            date_validation=datetime.datetime.now(),
            notification=f"Demande validée par {logistique.nom_user}, en attente de signature."
        )
        db.session.add(validation)
        db.session.commit()

        # Notifier le responsable que la demande a été validée
        responsable_users = User.query.filter_by(role_user="responsable").all()
        for responsable in responsable_users:
            notification_responsable = Notification(
                tel_user=responsable.tel_user,
                type_notification="Demande Validée",
                message=f"Une demande a été validée par {logistique.nom_user} et attend votre signature.",
                statut="non lue"
            )
            db.session.add(notification_responsable)

        # Notifier le demandeur
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Validée",
            message=f"Votre demande a été validée par {logistique.nom_user}, en attente de signature.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return {"message": f"Demande validée avec succès par {logistique.nom_user}."}, 200

    @staticmethod
    def signer_demande(id_demande, tel_user_responsable):
        """Signer la demande et notifier le logistique et le demandeur"""
        demande = Demande.query.get(id_demande)
        responsable = User.query.filter_by(tel_user=tel_user_responsable).first()

        if not demande:
            return {"message": "Demande introuvable"}, 404
        if not responsable:
            return {"message": "Utilisateur responsable introuvable"}, 404

        # Mettre à jour le statut de la demande comme signée
        demande.status_demande = "signée"
        db.session.commit()

        # Notifier le logistique
        logistique_users = User.query.filter_by(role_user="logistique").all()
        for logistique in logistique_users:
            notification_logistique = Notification(
                tel_user=logistique.tel_user,
                type_notification="Demande Signée",
                message=f"La demande de {demande.justification_demande} a été signée par {responsable.nom_user}.",
                statut="non lue"
            )
            db.session.add(notification_logistique)

        # Notifier le demandeur
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Signée",
            message=f"Votre demande de {demande.justification_demande} a été signée par {responsable.nom_user}.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return {"message": f"Demande signée avec succès par {responsable.nom_user}."}

    @staticmethod
    def refuser_demande(id_demande, tel_user_logistique):
        """Refuser une demande et notifier le logistique et le demandeur"""
        demande = Demande.query.get(id_demande)
        logistique = User.query.filter_by(tel_user=tel_user_logistique).first()

        if not demande:
            return {"message": "Demande introuvable"}, 404
        if not logistique:
            return {"message": "Utilisateur logistique introuvable"}, 404

        # Mettre à jour le statut de la demande comme refusée
        demande.status_demande = "refusée"
        db.session.commit()

        # Notifier le logistique
        notification_logistique = Notification(
            tel_user=logistique.tel_user,
            type_notification="Demande Refusée",
            message=f"La demande de {demande.justification_demande} a été refusée par {logistique.nom_user}.",
            statut="non lue"
        )
        db.session.add(notification_logistique)

        # Notifier le demandeur
        notification_demandeur = Notification(
            tel_user=demande.tel_user,
            type_notification="Demande Refusée",
            message=f"Votre demande de {demande.justification_demande} a été refusée par {logistique.nom_user}.",
            statut="non lue"
        )
        db.session.add(notification_demandeur)
        db.session.commit()

        return {"message": f"Demande refusée avec succès par {logistique.nom_user}."}
