import { AfficherInterface } from "../interfaces/afficher-interface";
import { Marque } from "./marque";

export class Vehicule implements AfficherInterface {
    private immatriculation: string;
    protected marque: Marque;

    /**
     * @var displayOrder number default 0
     * 0 means immat first then marque
     * 1 means marque first then immat
     */
    public displayOrder: number = 0;

    public constructor(immatriculation: string) {
        console.log('Hello Vehicule::constructor');
        this.immatriculation = immatriculation;
    }

    afficher(): string {
        if (this.displayOrder === 0) {
            return this.immatriculation + ' ' + this.marque.afficher();
        } else {
            return this.marque.afficher() + ' ' + this.immatriculation;
        }
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