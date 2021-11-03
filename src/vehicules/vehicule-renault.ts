import { Marque } from "./marque";
import { Vehicule } from "./vehicule";

export class VehiculeRenault extends Vehicule {
    public constructor(immat: string) {
        super(immat);
        this.marque = new Marque();
        this.marque.setLibelle('Renault');
    }
}