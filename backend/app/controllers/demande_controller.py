from flask import Blueprint, request, jsonify
from app.services.demande_service import DemandeService
from app.middleware.access_token import auth_required
def creer_demande():
    """Créer une nouvelle demande"""

    data = request.get_json()
    if not data or 'tel_user' not in data or 'justification' not in data or 'quantite' not in data:
        return jsonify({"message": "Données invalides"}), 400

    demande = DemandeService.ajoute_demande(
        data['tel_user'], data['justification'], data['quantite']
    )

    return jsonify({"message": "Demande créée avec succès", "demande": demande.id}), 201

def obtenir_toutes_les_demandes():
    """Obtenir toutes les demandes"""
    demandes = DemandeService.obtenir_toutes_les_demandes()
    demandes_list = [
        {
            "id": demande.id,
            "tel_user": demande.tel_user,
            "status": demande.status_demande,
            "justification": demande.justification_demande,
            "quantite": demande.quantite_demande
        }
        for demande in demandes
    ]
    return jsonify(demandes_list), 200

@auth_required
def get_demandeEtNotification():
    """ Récupérer le profil de l'utilisateur, y compris ses demandes et notifications """
    user_tel = request.user.tel_user  # Utilise l'utilisateur authentifié

    # Utilisation du service pour récupérer les demandes et notifications
    demandes_data, notifications_data = DemandeService.get_demandes_and_notifications(user_tel)

    # Retourner les données formatées
    return jsonify({
        "demandeur": {
            "demandes": demandes_data,
            "notifications": notifications_data
        }
    })
