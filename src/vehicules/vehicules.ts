import { Collection } from "../collection/collection";
import { Vehicule } from "./vehicule";

/**
 * Classe concrète qui étend la classe abstraite Collection
 * pour collectionner uniquement les objets Véhicule
 */
export class Vehicules extends Collection<Vehicule> {
    private static instance: Vehicules;

    public displayOrder: number = 0;

    private constructor() {
        super();
    }

    public static getInstance(): Vehicules {
        if (!Vehicules.instance) {
            Vehicules.instance = new Vehicules();
        }
        return Vehicules.instance;
    }

    public add(vehicule: Vehicule): void {
        vehicule.displayOrder = this.displayOrder;
        super.add(vehicule);
    }
    
    public afficher(): string {
        let sortie: string = '';
        for (let i = 0; i < this.liste.length; i++) {
            sortie = sortie + ' ' + this.liste[i].afficher() + '\n';
        }
        return sortie;
    }

    public delete(element: Vehicule): void {
        throw new Error("Method not implemented.");
    }
}