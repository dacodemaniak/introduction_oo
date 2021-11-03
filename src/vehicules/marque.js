"use strict";
exports.__esModule = true;
exports.Marque = void 0;
/**
 * Marque
 *  Class that represents the marks of vehicles
 */
var Marque = /** @class */ (function () {
    function Marque() {
    }
    Marque.prototype.setLibelle = function (libelle) {
        if (this.libelle === undefined || this.libelle === null) {
            this.libelle = libelle;
        }
    };
    Marque.prototype.getLibelle = function () {
        return this.libelle;
    };
    return Marque;
}());
exports.Marque = Marque;
