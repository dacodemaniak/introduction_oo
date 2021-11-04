import { AfficherInterface } from "../interfaces/afficher-interface";

export abstract class Collection<T> implements AfficherInterface {
    public abstract afficher(): string;

    /**
     * Class attributes
     */
    protected liste: T[] = [];

    /**
     * Class methods
     */
    public add(element: T): void {
        this.liste.push(element);
    }

    public abstract delete(element: T): void;

    public update(element: T): void {}

    public get(indice: number): T {
        let position: number = indice - 1; // Le premier indice d'un tableau est 0 !
        return this.liste[position];
    }

    public getAll(): T[] {
        return this.liste;
    }
}