document.addEventListener('DOMContentLoaded', function() {
  
  
  
  
  // GPT code pour Captcha aléaloire à partir des images d'un dossier
  const fs = require('fs');
  const path = require('path');
  
  // Chemin du dossier contenant les images
  const dossierImages = './chemin/vers/votre/dossier/images';
  
  // Lire la liste des fichiers dans le dossier
  fs.readdir(dossierImages, (err, fichiers) => {
    if (err) {
      console.error('Erreur lors de la lecture du dossier :', err);
      return;
    }
  
    // Générer un nombre aléatoire pour choisir un fichier
    const indexAleatoire = Math.floor(Math.random() * fichiers.length);
  
    // Obtenir le nom du fichier image aléatoire
    const nomFichierAleatoire = fichiers[indexAleatoire];
  
    // Créer l'élément img et lui attribuer le chemin du fichier image
    const imgElement = document.createElement('img');
    imgElement.src = path.join(dossierImages, nomFichierAleatoire);
  
    // Ajouter l'élément img à votre page HTML
    document.body.appendChild(imgElement);
  });
  
  
});