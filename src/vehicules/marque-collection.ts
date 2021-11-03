/**
 * Gestion d'une liste de marques
 */
import { Marque } from './marque';

export class MarqueCollection {
    private liste: Marque[] = [];

    public add(marque: Marque): void {
        if (!this.isInArray(marque)) {
          this.liste.push(marque);  
        }
    }

    public delete(marque: Marque): void {
        const nouveauTableau: Marque[] = [];
        for (let i = 0; i < this.liste.length; i++) {
            if ( this.liste[i].getLibelle() !== marque.getLibelle() ) {
                nouveauTableau.push(this.liste[i]);
            }
        }
        this.liste = nouveauTableau;
    }

    public update(marque: Marque): void {}

    public get(indice: number): Marque {
        return this.liste[indice];
    }

    public getAll(): Marque[] {
        return this.liste;
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