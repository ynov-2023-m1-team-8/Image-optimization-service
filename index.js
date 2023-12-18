const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDirectory = './public/uploads';
const outputDirectory = './compressed-images';

const optimizeImages = () => {

  // Lister les fichiers dans le répertoire d'entrée
  fs.readdir(inputDirectory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // Traiter chaque fichier
    files.forEach((file) => {
      const inputFilePath = path.join(inputDirectory, file);
      const outputFilePath = path.join(outputDirectory, file.replace(/\.[^/.]+$/, '.webp'));

      // Vérifier si le fichier n'est pas déjà au format WebP
      if (!file.endsWith('.webp')) {
        // Utiliser Sharp pour convertir l'image en WebP
        sharp(inputFilePath)
          .webp()
          .toFile(outputFilePath, (sharpErr, info) => {
            if (sharpErr) {
              console.error(`Erreur lors du traitement de ${file}:`, sharpErr);
            } else {
              console.log(`Image ${file} optimisée en WebP:`, info);
            }
          });
      }
    });
  });
};

// Optimiser les images toutes les 30 minutes
setInterval(optimizeImages, 30 * 60 * 1000);