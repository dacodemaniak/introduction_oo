import { Collection } from "../collection/collection";
import { Vehicule } from "./vehicule";

export class Vehicules extends Collection<Vehicule> {
    public delete(element: Vehicule): void {
        throw new Error("Method not implemented.");
    }
}