from flask import Blueprint
from app.controllers.article_controller import ajoutArticle,listeArticle


article_bp = Blueprint('article_bp', __name__) 

article_bp.add_url_rule('/ajout', 'ajoutArticle', ajoutArticle, methods=['POST']) # ajout des articles

article_bp.add_url_rule('/listes', 'listeArticle', listeArticle, methods=['GET']) # liste des articles