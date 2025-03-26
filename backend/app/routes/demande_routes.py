from flask import Blueprint
from app.controllers.demande_controller import creer_demande, obtenir_tous_les_demandes, get_demandeEtNotification


demande_bp = Blueprint('demande_bp', __name__)

#creation la demande
demande_bp.add_url_rule('/createDemande', 'creer_demande', creer_demande, methods=['POST']) 
#obtenir tous le demande,le responsable et le logistique 
demande_bp.add_url_rule('/obtenirTousDemandes', 'obtenir_tous_les_demandes', obtenir_tous_les_demandes, methods=['GET']) 
#pour afficher le demande et le notification demandeur
demande_bp.add_url_rule('/getDemandeEtNotification', 'get_demandeEtNotification', get_demandeEtNotification, methods=['GET']) 