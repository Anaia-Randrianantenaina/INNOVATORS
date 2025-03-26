from flask import request,jsonify
from app.services.article_service import ArticleService


def ajoutArticle():
    """Inscription d'un nouvel Article."""
    data = request.get_json()

    nom = data.get('nom')
    description = data.get('description')
    prix = data.get('prix')

    # Vérification des champs obligatoires
    if not all([description, nom, prix]):
        return jsonify({"message": "Tous les champs sont obligatoires."}), 400

    # Inscription de l'article
    article, error = ArticleService.ajout_article(nom, description, prix)

    if error:
        return jsonify({"message": error}), 400

    return jsonify({"message": "Article créé avec succès."}), 201

def listeArticle():
    """Obtenir toutes les articles"""
    articles = ArticleService.liste_article()
    listes = [
            {
                "id": article.id,
                "nom": article.nom,
                "description": article.description,
                "reference": article.reference,
                "prix": article.prix
            }
            for article in articles
    ]
    return jsonify(listes), 200   