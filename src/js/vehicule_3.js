/**
 * Class Marque
 */
class Marque {
    constructor() {
        /**
         * @var string
         */
        this.libelle = '';
    }
}

/**
 * Class Vehicule
 * update :
 *  Move marque from string to Marque object
 */
class Vehicule {
    constructor() {
        /**
         * @var string
         */
        this.immatriculation = '';

        /**
         * @var Marque
         */
        this.marque = null;
    }

    // Comportement, méthode, fonction de classe
    /**
     * 
     * @param {string} libelle 
     * @returns boolean
     */
    estDeMarque(libelle) {
        if (this.marque.libelle.toLowerCase() === libelle.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Main
 */

// Créer un objet de type Marque
const marque1 = new Marque(); // marque1 est une INSTANCE de la classe Marque
marque1.libelle = 'Renault';

const marque2 = new Marque();
marque2.libelle = 'Peugeot';


const vehicule1 = new Vehicule(); // vehicule1 est une INSTANCE de la classe Vehicule
vehicule1.immatriculation = 'HHH 200 ZZZ';
vehicule1.marque = marque1;

const vehicule2 = new Vehicule(); // vehicule2 est une INSTANCE de la classe Vehicule
vehicule2.immatriculation = 'CCC 312 XXX';
vehicule2.marque = marque1;

/**
 * Lister les véhicules de marque Renault
 */
const vehicules = [vehicule1, vehicule2];

for (let i = 0; i < vehicules.length; i++) {
    const vehicule = vehicules[i];
    if (vehicule.estDeMarque('RENAULT')) {
        console.log('Véhicule ' + vehicule.immatriculation + ' est un Renault');
    }
}