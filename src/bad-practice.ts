import { Marque } from './vehicules/marque';

const isInArray = (marques: Marque[], marque: Marque): boolean => {
    for (let i = 0; i < marques.length; i++) {
        if (marques[i].getLibelle() === marque.getLibelle()) {
            return true;
        }
    }
    return false;
}

const marque1: Marque = new Marque();
marque1.setLibelle('Alpha Roméo');

const marque2: Marque = new Marque();
marque2.setLibelle('Fiat');

const marques: Marque[] = [marque1, marque2, marque1];

// C'est une mauvaise pratique car...
if (!isInArray(marques, marque1)) {
    marques.push(marque1);
}