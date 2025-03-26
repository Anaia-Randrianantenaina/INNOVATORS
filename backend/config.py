import os
from dotenv import load_dotenv
from datetime import timedelta
load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://postgres:nestor@localhost:5432/hackaton')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'notre_cle_secrete_par_defaut')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=30)
class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
