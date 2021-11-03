"use strict";
exports.__esModule = true;
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(immatriculation) {
        console.log('Hello Vehicule::constructor');
        this.immatriculation = immatriculation;
    }
    Vehicule.prototype.getImmatriculation = function () {
        return this.immatriculation;
    };
    Vehicule.prototype.setMarque = function (marque) {
        this.marque = marque;
    };
    Vehicule.prototype.getMarque = function () {
        return this.marque;
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
