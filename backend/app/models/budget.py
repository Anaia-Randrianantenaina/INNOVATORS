from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Budget(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    montant = db.Column(db.Float, nullable=False, default=0.0)

    def __repr__(self):
        return f'<Budget {self.montant}>'
