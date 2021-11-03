"use strict";
exports.__esModule = true;
exports.MarqueCollection = void 0;
var MarqueCollection = /** @class */ (function () {
    function MarqueCollection() {
        this.liste = [];
    }
    MarqueCollection.prototype.add = function (marque) {
        if (!this.isInArray(marque)) {
            this.liste.push(marque);
        }
    };
    MarqueCollection.prototype["delete"] = function (marque) {
        var nouveauTableau = [];
        for (var i = 0; i < this.liste.length; i++) {
            if (this.liste[i].getLibelle() !== marque.getLibelle()) {
                nouveauTableau.push(this.liste[i]);
            }
        }
        this.liste = nouveauTableau;
    };
    MarqueCollection.prototype.update = function (marque) { };
    MarqueCollection.prototype.get = function (indice) {
        return this.liste[indice];
    };
    MarqueCollection.prototype.getAll = function () {
        return this.liste;
    };
    MarqueCollection.prototype.isInArray = function (marque) {
        var isInArray = false;
        for (var i = 0; i < this.liste.length; i++) {
            if (this.liste[i].getLibelle() === marque.getLibelle()) {
                isInArray = true;
            }
        }
        return isInArray;
    };
    return MarqueCollection;
}());
exports.MarqueCollection = MarqueCollection;
