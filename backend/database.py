from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    Migrate(app, db)

    # Importer et enregistrer les routes
    from routes.user_routes import user_bp
    app.register_blueprint(user_bp, url_prefix='/users')

    return app
