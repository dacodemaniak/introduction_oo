import { Collection } from "../collection/collection";
import { Vehicule } from "./vehicule";

/**
 * Classe concrète qui étend la classe abstraite Collection
 * pour collectionner uniquement les objets Véhicule
 */
export class Vehicules extends Collection<Vehicule> {
    public delete(element: Vehicule): void {
        throw new Error("Method not implemented.");
    }
}