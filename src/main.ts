/**
 * Point d'entrée dans l'application véhicules
 */

import { Marque } from './vehicules/marque';
import { MarqueCollection } from './vehicules/marque-collection';
import { Marques } from './vehicules/marques';

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
console.log(collection.getAll().length + ' dans Marques (classe fille)');