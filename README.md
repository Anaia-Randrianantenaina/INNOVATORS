GESTION DES ACHATS EN ENTREPRISE / ACCES BANQUE / INNOVAT

github : 

##  FRONTEND
## Installation 

### Prérequis
Assurez-vous que vous avez installé les outils suivants avant de commencer :
- **Node.js** (dernière version) : [Télécharger Node.js](https://nodejs.org/)

### Étapes d'installation

1. **Cloner le dépôt du projet** :
   ```bash
   git clone <https://github.com/Anaia-Randrianantenaina/INNOVATORS.git>

Accéder au répertoire du projet (frontend) : 
cd frontend

Installer les dépendances
npm install

Démarrer le serveur de développement 
npm run dev

Accéder à l'application 
Local:   http://localhost:5173/



## BACKEND
<!-- Créer un environnement virtuel -->
python -m venv venv
<!-- activation venv sur  -->
sur lunix ou Mac:source venv/bin/activate
Sur Windows: venv\Scripts\activate
<!-- lancement du projet  -->
flask run ou python app.py
<!-- Ajoute les dépendances dans un fichier  -->
requirements.txt
<!-- Ajoute les dépendances dans un fichier requirements.txt -->
echo flask > requirements.txt
echo flask-sqlalchemy >> requirements.txt
echo flask-migrate >> requirements.txt
<!-- Gérer les Migrations -->
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
<!-- Si flask n'est pas reconnu, exécute  -->
python -m flask db init
python -m flask db migrate -m "Initial migration"
python -m flask db upgrade
configuration .env{
    DATABASE_URL=votre base de donne
}

INSTALLATION LINUX

sudo apt install python3 -y

sudo apt install python3-pip -y

sudo apt install python-flask
pip install flask_sqlalchemy

pip install flask_migrate

pip install flask_jwt_extended
 pip install dontevpip 
 pip install psycopg2-binary

 