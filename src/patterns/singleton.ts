/**
 * Un pattern Singleton
 */
export class Singleton {
    /**
     * Un attribut statique qui sera l'instance de la classe Singleton
     */
    private static instance: Singleton;

    /**
     * On a un constructeur, mais ce constructeur est privé !
     */
    private constructor() {
        console.log('Hello, je suis le constructeur de Singleton');
    }

    /**
     * Méthode publique et statique destinée à instancier l'objet Singleton
     */
    public static getInstance(): Singleton {
        if (Singleton.instance === null || Singleton.instance === undefined) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance; // Retourne l'instance courante de Singleton
    }
}

// On ne peut pas instancier directement Singleton car le constructeur est privé
// const singleton: Singleton = new Singleton();