/**
 * Point d'entrée dans l'application véhicules
 */

import { Collection } from './collection/collection';
import { Marque } from './vehicules/marque';
import { MarqueCollection } from './vehicules/marque-collection';
import { Marques } from './vehicules/marques';
import { Vehicule } from './vehicules/vehicule';
import { Vehicules } from './vehicules/vehicules';

console.log('Hello main ts');

// Création d'une instance de MarqueCollection
const marques: MarqueCollection = new MarqueCollection();
const collection: Marques = new Marques();

// Créer une nouvelle instance de marque
const marque1: Marque = new Marque();
marque1.setLibelle('Renault');

// Ajouter marque1 à la collection des marques
marques.add(marque1);
collection.add(marque1);


// Créer une autre marque et l'ajouter à la collection
const marque2: Marque = new Marque();
marque2.setLibelle('Peugeot');
marques.add(marque2);
collection.add(marque2);


// Essayer d'ajouter à nouveau la marque Renault dans la collection
marques.add(marque1);

console.log('marque1 : ' + marque1.getLibelle()); // Expected Renault

marque1.setLibelle('Citroën');

console.log('Maintenant marque1 : ' + marque1.getLibelle()); // Expected Renault

// Voir le nombre d'éléments dans la liste des marques
// Attend : 2 ( et pas 3 )
console.log(marques.getAll().length + ' éléments dans la collection des marques');

// Voir le nombre d'éléments dans la listes des marques gérée par Marques
// On attend 2 éléments
collection.add(marque1);
console.log(collection.getAll().length + ' dans Marques (classe fille)');

console.log('Elément n° 2 ', collection.get(2));
// collection.recupereElementNum(2)


// Créer une collection de Véhicules
// Afficher la liste des véhicules de la collection (immat et marque)


// 1. Modifier la classe Vehicule pour y ajouter :
//  une méthode getImmatriculation() qui doit retourner la valeur de l'attribut immatriculation
//  une méthode setMarque(marque: Marque) pour définir la marque du véhicule
//  une méthode getMarque() qui doit retourner la marque du véhicule

// 2. Créer une classe Vehicules qui étend la classe Collection

// 3. Dans main.ts faire une boucle qui parcourt la collection des véhicules

const vehicules: Vehicules = new Vehicules();
const maVoiture: Vehicule = new Vehicule('AAA 999 BBB');
maVoiture.setMarque(marque1);
vehicules.add(maVoiture);

const autreVoiture: Vehicule = new Vehicule('BBB 888 CCC');
autreVoiture.setMarque(collection.get(2));
vehicules.add(autreVoiture);

// Boucle pour afficher le tout
vehicules.getAll().forEach((vehicule: Vehicule) => {
    console.log(vehicule.getImmatriculation() + ' de marque ' + vehicule.getMarque().getLibelle());
})

