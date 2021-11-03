import { Collection } from "../collection/collection";
import { Marque } from "./marque";

export class Marques extends Collection<Marque> {

    public delete(element: Marque): void {
        throw new Error("Method not implemented.");
    }

    /**
     * Override (réécriture de méthode)
     * @param element
     */
    public add(element: Marque): void {
        if (!this.isInArray(element)) {
            this.liste.push(element);  
        }
    }

    private isInArray(marque: Marque): boolean {
        let isInArray = false;
        for (let i = 0; i < this.liste.length; i++) {
            if (this.liste[i].getLibelle() === marque.getLibelle()) {
                isInArray = true;
            }
        }
        return isInArray;
    }
}