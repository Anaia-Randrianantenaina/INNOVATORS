from app.models.demande import Demande
from app.models.user import User
from app.models.article import Article
from flask import request
from app import db
from app.models.notification import Notification


class DemandeService:
    @staticmethod
    def ajoute_demande(justification, quantite, id_article):
        """Créer une nouvelle demande et notifier le logistique"""
        
        # Utiliser le tel_user de l'utilisateur connecté
        tel_user = request.user.tel_user

        # Vérifier si l'utilisateur est un demandeur ou un logistique
        utilisateur = User.query.filter_by(tel_user=tel_user).first()

        if not utilisateur:
            return {"message": "Utilisateur non trouvé"}, 404
        
        if utilisateur.role_user not in ["demandeur", "logistique"]:
            return {"message": "Accès refusé, vous n'êtes pas autorisé à faire une demande"}, 403
        
        nouvelle_demande = Demande(
            id_article=id_article,
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
        """Récupérer toutes les demandes avec les prix des articles"""
        demandes = Demande.query.all()
        
        demandes_data = []
        for demande in demandes:
            article = Article.query.get(demande.id_article)
            if article:
                demandes_data.append({
                    "id": demande.id,
                    "article": article.nom,
                    "price": article.prix
                })
        
        return demandes_data

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