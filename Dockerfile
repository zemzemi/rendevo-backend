FROM node:22-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et lock (vite = cache)
COPY package*.json ./

# Installe toutes les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

# Port exposé (par défaut 5000 dans .env)
EXPOSE 5000

# Commande de développement avec live reload
CMD ["npm", "run", "dev"]