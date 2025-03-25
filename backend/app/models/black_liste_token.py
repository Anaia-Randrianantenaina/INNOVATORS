from app import db

class BlacklistToken(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __init__(self, token):
        self.token = token
