export class Collection<T> {
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

    public delete(element: T): void {}

    public update(element: T): void {}

    public get(indice: number): T {
        return this.liste[indice];
    }

    public getAll(): T[] {
        return this.liste;
    }
}