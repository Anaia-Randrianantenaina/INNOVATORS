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
        
        validation = Validation(
            tel_user=tel_user_logistique,
            status_validation="valide",
            id_demande=id_demande,
            date_validation= datetime.datetime.now(),
            notification="Demande validée, en attente de signature."
        )

        db.session.add(validation)
        db.session.commit()

        # Notifier le responsable (à implémenter)
        ValidationService.notifier_responsable(validation)

        return validation

    @staticmethod
    def refuser_demande(id_demande, tel_user_logistique):
        """Refuser une demande et notifier le demandeur"""
        demande = Demande.query.get(id_demande)
        if not demande:
            return {"message": "Demande introuvable"}, 404
        
        validation = Validation(
            tel_user=tel_user_logistique,
            status_validation="refusé",
            id_demande=id_demande,
            date_validation="Aujourd'hui",
            notification="Demande refusée."
        )

        db.session.add(validation)
        db.session.commit()

        # Notifier le demandeur
        ValidationService.notifier_demandeur(demande, "Votre demande a été refusée.")

        return validation

    @staticmethod
    def signer_validation(id, signature_responsable):
        """Signer la validation et notifier le demandeur"""
        print(f"Validation ID: {id}, Signature Responsable: {signature_responsable}")
        validation = Validation.query.get(id)
        if not validation:
            print("Validation introuvable")
            return {"message": "Validation introuvable"}, 404

        validation.signature_responsable = signature_responsable
        db.session.commit()

        # Notifier le demandeur
        ValidationService.notifier_demandeur(validation.demande, "Votre demande a été acceptée.")

        return validation


    @staticmethod
    def notifier_responsable(validation):
        """Notifier le responsable qu'une validation est en attente de signature"""
        responsables = User.query.filter_by(role_user="responsable").all()
        for responsable in responsables:
            print(f"Notification envoyée à {responsable.email_user}: Une validation est en attente de votre signature.")

    @staticmethod
    def notifier_demandeur(demande, message):
        """Notifier le demandeur du statut de sa demande"""
        demandeur = User.query.filter_by(tel_user=demande.tel_user).first()
        if demandeur:
            print(f"Notification envoyée à {demandeur.email_user}: {message}")
