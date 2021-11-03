import { Marque } from "./marque";

export class Vehicule {
    private immatriculation: string;
    protected marque: Marque;

    public constructor(immatriculation: string) {
        console.log('Hello Vehicule::constructor');
        this.immatriculation = immatriculation;
    }

    public getImmatriculation(): string {
        return this.immatriculation;
    }

    public setMarque(marque: Marque): void {
        this.marque = marque;
    }

    public getMarque(): Marque {
        return this.marque;
    }
}