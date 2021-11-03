"use strict";
exports.__esModule = true;
exports.Collection = void 0;
var Collection = /** @class */ (function () {
    function Collection() {
        /**
         * Class attributes
         */
        this.liste = [];
    }
    /**
     * Class methods
     */
    Collection.prototype.add = function (element) {
        this.liste.push(element);
    };
    Collection.prototype.update = function (element) { };
    Collection.prototype.get = function (indice) {
        var position = indice - 1; // Le premier indice d'un tableau est 0 !
        return this.liste[position];
    };
    Collection.prototype.getAll = function () {
        return this.liste;
    };
    return Collection;
}());
exports.Collection = Collection;
