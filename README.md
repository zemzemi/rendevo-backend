# Rendevo Backend

Backend de l'application **Rendevo** — système de prise de rendez-vous.

Développé avec :

- Node.js 22 (Alpine)
- Express.js
- TypeScript
- MongoDB (via Mongoose)
- Docker + Docker Compose

## 🚀 Démarrage rapide (en développement)

### Prérequis

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- `make` (optionnel mais recommandé)

### Lancer en local

```bash
make dev
```

## Scripts utiles

```bash
make dev # Lancer l'app en dev
make stop # Arrêter tous les conteneurs
make clean # Supprimer conteneurs + volumes
make rebuild # Forcer le rebuild complet
make logs # Voir les logs du backend
make sh # Shell dans le conteneur backend
make mongo-sh # Shell dans le conteneur MongoDB
```

## Variables d'environnement

Crée un fichier .env à la racine :

```ini
PORT=5000 # Port sur lequel tourne l'API Express
MONGO_URI=mongodb://mongo:27017/rendevo # URI de connexion MongoDB (utilisée en Docker)
```
