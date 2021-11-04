import { Marque } from "../vehicules/marque";
import { Vehicule } from "../vehicules/vehicule";

export class VehiculeFactory {
    public static immatOnly(immatriculation: string): Vehicule {
        return new Vehicule(immatriculation);
    }

    public static immatAndMarque(immatriculation: string, marque: Marque): Vehicule {
        const vehicule: Vehicule = new Vehicule(immatriculation);
        vehicule.setMarque(marque);

        return vehicule;
    }
}