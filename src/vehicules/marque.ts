/**
 * Marque
 *  Class that represents the marks of vehicles
 */
export class Marque {
    /**
     * @var string
     */
    private libelle: string;

    /**
     * Définit la valeur pour l'attribut "libellé" de CETTE (this)
     *  marque et interdit de redéfinir cette valeur si
     *  le libellé avait déjà été défini.
     * @param libelle 
     */
    public setLibelle(libelle: string): void {
        if (this.libelle === undefined || this.libelle === null) {
            this.libelle = libelle;
        }
    }

    public getLibelle(): string {
        return this.libelle;
    }
}