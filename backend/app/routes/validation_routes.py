from flask import Blueprint
from app.controllers.validation_controller import valider_demande, refuser_demande, signer_validation, signer_validation


validation_bp = Blueprint('validation_bp', __name__)

validation_bp.add_url_rule('/validationDemande', 'valider_demande', valider_demande, methods=['POST']) 
validation_bp.add_url_rule('/validationRefuse', 'refuser_demande', refuser_demande, methods=['POST'])  
validation_bp.add_url_rule('/validationSigner', 'signer_validation', signer_validation, methods=['POST'])
