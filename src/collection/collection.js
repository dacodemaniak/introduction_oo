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
    Collection.prototype["delete"] = function (element) { };
    Collection.prototype.update = function (element) { };
    Collection.prototype.get = function (indice) {
        return this.liste[indice];
    };
    Collection.prototype.getAll = function () {
        return this.liste;
    };
    return Collection;
}());
exports.Collection = Collection;
