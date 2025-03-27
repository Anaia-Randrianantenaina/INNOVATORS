from flask import Blueprint, request, jsonify
from app.services.budget_service import BudgetService

@staticmethod
def ajouter_budgets():
    data = request.json
    montant = data.get('montant', 0.0)
    budget = BudgetService.ajouter_budget(montant)
    return jsonify({'message': 'Budget ajouté', 'budget': budget.montant})

@staticmethod
def obtenir_budgets():
    budget = BudgetService.obtenir_budget()
    if budget:
        return jsonify({'budget': budget.montant})
    return jsonify({'message': 'Aucun budget trouvé'})

@staticmethod
def modifier_budgets():
    data = request.json
    montant = data.get('montant', 0.0)
    budget = BudgetService.modifier_budget(montant)
    if budget:
        return jsonify({'message': 'Budget mis à jour', 'budget': budget.montant})
    return jsonify({'message': 'Aucun budget trouvé'})
