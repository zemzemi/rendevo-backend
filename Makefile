PROJECT=rendevo-backend

# Lancer les conteneurs en dev
dev:
	docker-compose up --build

# Stopper les conteneurs
stop:
	docker-compose down

# Supprimer les conteneurs, volumes et images buildés
clean:
	docker-compose down -v --rmi local

# Rebuild total du backend
rebuild:
	docker-compose build --no-cache

# Voir les logs
logs:
	docker-compose logs -f

# Accès shell dans le conteneur backend
sh:
	docker exec -it rendevo-backend-dev sh

# Accès shell dans le conteneur mongo
mongo-sh:
	docker exec -it rendevo-mongo sh