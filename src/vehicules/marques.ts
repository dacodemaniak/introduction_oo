import { Collection } from "../collection/collection";
import { Marque } from "./marque";

export class Marques extends Collection<Marque> {
    /**
     * Implémentation de la méthode afficher() de l'interface AfficherInterface
     * @returns 
     */
    public afficher(): string {
        let sortie: string = '';
        for (let i = 0; i < this.liste.length; i++) {
            sortie = sortie + ' ' + this.liste[i].afficher() + '\n';
        }
        return sortie;
    }

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