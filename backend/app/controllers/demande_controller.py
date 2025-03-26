from flask import Blueprint, request, jsonify
from app.services.demande_service import DemandeService
from app.middleware.access_token import auth_required
from app.models.user import User  # Importez votre modèle d'utilisateur
from app.models.article import Article  # Importez votre modèle d'article
from itertools import combinations
@auth_required
def creer_demande():
    """Créer une nouvelle demande"""

    data = request.get_json()
    if not data or 'justification' not in data or 'quantite' not in data  or 'id_article' not in data:
        return jsonify({"message": "Données invalides"}), 400

    # Appel du service pour ajouter la demande
    response = DemandeService.ajoute_demande(
        data['justification'], data['quantite'], data['id_article']
    )

    if isinstance(response, tuple):  # Si le retour est un message d'erreur
        return jsonify(response[0]), response[1]

    return jsonify({"message": "Demande créée avec succès", "demande": response.id}), 201

@staticmethod
def obtenir_tous_les_demandes(budget=None):
        """Trouver toutes les combinaisons valides en fonction du budget"""
        demandes = DemandeService.obtenir_toutes_les_demandes()
        valid_combinations = []

        # Vérifier toutes les combinaisons possibles qui respectent le budget
        for i in range(1, len(demandes) + 1):
            for combination in combinations(demandes, i):
                total_cost = sum(item["price"] for item in combination)
                if total_cost <= budget:
                    valid_combinations.append({
                        "total_cost": total_cost,
                        "items": combination
                    })    

        # Trier les combinaisons par coût total en ordre décroissant
        valid_combinations.sort(key=lambda x: x["total_cost"], reverse=True)
        
        return valid_combinations

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
