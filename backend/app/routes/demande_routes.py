from flask import Blueprint
from app.controllers.demande_controller import creer_demande, obtenir_toutes_les_demandes


demande_bp = Blueprint('demande_bp', __name__)

demande_bp.add_url_rule('/createDemande', 'creer_demande', creer_demande, methods=['POST']) 
demande_bp.add_url_rule('/obtenirTousDemandes', 'obtenir_toutes_les_demandes', obtenir_toutes_les_demandes, methods=['GET']) 
