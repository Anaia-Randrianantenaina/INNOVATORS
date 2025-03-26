from app.models.budget import Budget
from app import db
class BudgetService:
    @staticmethod
    def obtenir_budget():
        return Budget.query.first()  # Maka budget voalohany

    @staticmethod
    def ajouter_budget(montant):
        nouveau_budget = Budget(montant=montant)
        db.session.add(nouveau_budget)
        db.session.commit()
        return nouveau_budget

    @staticmethod
    def modifier_budget(montant):
        budget = Budget.query.first()
        if budget:
            budget.montant = montant
            db.session.commit()
            return budget
        return None
