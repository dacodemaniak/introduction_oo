/**
 * Class Vehicule
 */
class Vehicule {
    constructor() {
        /**
         * @var string
         */
        this.immatriculation = '';

        /**
         * @var string
         */
        this.marque = '';
    }
}

/**
 * Main
 */
const vehicule1 = new Vehicule(); // vehicule1 est une INSTANCE de la classe Vehicule
vehicule1.immatriculation = 'HHH 200 ZZZ';
vehicule1.marque = 'Renault';

const vehicule2 = new Vehicule(); // vehicule2 est une INSTANCE de la classe Vehicule
vehicule2.immatriculation = 'CCC 312 XXX';
vehicule2.marque = 'Renaut';

/**
 * Lister les véhicules de marque Renault
 */
const vehicules = [vehicule1, vehicule2];

for (let i = 0; i < vehicules.length; i++) {
    const vehicule = vehicules[i];
    if (vehicule.marque === 'Renault' || vehicule.marque === 'Renaut') {
        console.log('Véhicule ' + vehicule.immatriculation + ' est un Renault');
    }
}