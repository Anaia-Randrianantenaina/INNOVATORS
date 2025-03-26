from flask import Blueprint, request, jsonify
from app.services.validation_service import ValidationService

def valider_demande():
    """Valider une demande"""
    data = request.get_json()
    
    # Vérification des données d'entrée
    if not data or 'id_demande' not in data or 'tel_user_logistique' not in data:
        return jsonify({"message": "Données invalides"}), 400

    # Appel du service de validation
    response, status_code = ValidationService.valider_demande(
        data['id_demande'], data['tel_user_logistique']
    )

    return jsonify(response), status_code

def refuser_demande():
    """Refuser une demande"""
    data = request.get_json()
    if not data or 'id_demande' not in data or 'tel_user_logistique' not in data:
        return jsonify({"message": "Données invalides"}), 400

    validation = ValidationService.refuser_demande(
        data['id_demande'], data['tel_user_logistique']
    )

    return jsonify({"message": "Demande refusée"}), 200

def signer_validation():
    """Signer une validation par le responsable"""
    data = request.get_json()
    if not data or 'id' not in data or 'signature_responsable' not in data:
        return jsonify({"message": "Données invalides"}), 400

    validation = ValidationService.signer_demande(
        data['id'], data['signature_responsable']
    )

    return jsonify({"message": "Validation signée avec succès"}), 200
