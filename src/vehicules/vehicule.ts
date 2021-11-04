import { AfficherInterface } from "../interfaces/afficher-interface";
import { Marque } from "./marque";

export class Vehicule implements AfficherInterface {
    private immatriculation: string;
    protected marque: Marque;

    public constructor(immatriculation: string) {
        console.log('Hello Vehicule::constructor');
        this.immatriculation = immatriculation;
    }
    afficher(): string {
        return this.immatriculation + ' ' + this.marque.afficher();
    }

    /**
     * Retourne la valeur de l'attribut "immatriculation" de CE (this) Véhicule
     * @returns 
     */
    public getImmatriculation(): string {
        return this.immatriculation;
    }

    /**
     * Définir la marque de CE (this) Véhicule (setter)
     * @param marque 
     */
    public setMarque(marque: Marque): void {
        this.marque = marque;
    }

    /**
     * Retourne la Marque de CE (this) véhicule (getter)
     * @returns 
     */
    public getMarque(): Marque {
        return this.marque;
    }
}