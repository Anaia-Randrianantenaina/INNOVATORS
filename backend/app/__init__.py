from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

db = SQLAlchemy()  # Instance SQLAlchemy
migrate = Migrate()  # Instance Flask-Migrate

def create_app():
    app = Flask(__name__)

    # Charger la configuration
    from config import Config
    app.config.from_object(Config)
    jwt = JWTManager(app)

    # Initialisation de la base de données et de Flask-Migrate
    db.init_app(app)
    migrate.init_app(app, db)

    # Importer les routes après l'initialisation de l'app
    from app.routes.user_routes import user_bp
    app.register_blueprint(user_bp, url_prefix='/users')
    from app.routes.demande_routes import demande_bp
    app.register_blueprint(demande_bp, url_prefix='/demande')
    from app.routes.validation_routes import validation_bp
    app.register_blueprint(validation_bp, url_prefix='/validation')

    return app
