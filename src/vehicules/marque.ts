/**
 * Marque
 *  Class that represents the marks of vehicles
 */
export class Marque {
    /**
     * @var string
     */
    private libelle: string;

    public setLibelle(libelle: string): void {
        if (this.libelle === undefined || this.libelle === null) {
            this.libelle = libelle;
        }
    }

    public getLibelle(): string {
        return this.libelle;
    }
}