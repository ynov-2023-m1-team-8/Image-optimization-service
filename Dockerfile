# Utilisation de l'image Node.js
FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

COPY /src/. /usr/src/app

# Copie du fichier package.json (s'il existe)
COPY package*.json ./

# Installation des dépendances (si nécessaire)
RUN npm install

# Copie du fichier JavaScript dans le conteneur
COPY index.js ./

# Commande par défaut pour exécuter le index avec Node.js
CMD ["node", "index.js"]
