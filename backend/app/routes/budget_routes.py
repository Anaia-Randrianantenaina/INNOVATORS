from flask import Blueprint
from app.controllers.budget_controller import ajouter_budgets, obtenir_budgets, modifier_budgets


budget_bp = Blueprint('budget_bp', __name__)

#creation la demande
budget_bp.add_url_rule('/ajoutBudget', 'ajouter_budgets', ajouter_budgets, methods=['POST']) 
#obtenir tous le demande,le responsable et le logistique 
budget_bp.add_url_rule('/obtenirBudget', 'obtenir_budgets', obtenir_budgets, methods=['GET']) 
#pour afficher le demande et le notification demandeur
budget_bp.add_url_rule('/modificationBuget', 'modifier_budgets', modifier_budgets, methods=['PUT']) 