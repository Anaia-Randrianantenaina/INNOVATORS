from app.models.article import Article
from app import db



class ArticleService:

    @staticmethod
    def ajout_article(nom, description, prix):
        """Créer un nouvel article :"""

        # Création de l'utilisateur
        article = Article(
            nom=nom,
            description=description,
            prix=prix,
        )

        db.session.add(article)
        db.session.commit()
        return article, None  # Retourne l'utilisateur et `None` en cas de succès
    
    @staticmethod
    def liste_article():
        """Récupérer toutes les articles :"""
        return Article.query.all()
