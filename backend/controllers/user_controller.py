from flask import jsonify, request
from models.user import User
from database import db

class UserController:
    @staticmethod
    def get_all_users():
        """Retourne tous les utilisateurs."""
        users = User.query.all()
        return jsonify([{"id": u.id, "username": u.username, "email": u.email} for u in users])

    @staticmethod
    def create_user():
        """Créer un nouvel utilisateur."""
        data = request.get_json()
        username = data.get("username")
        email = data.get("email")

        if not username or not email:
            return jsonify({"error": "Les champs username et email sont obligatoires"}), 400

        new_user = User(username=username, email=email)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Utilisateur créé avec succès"}), 201
