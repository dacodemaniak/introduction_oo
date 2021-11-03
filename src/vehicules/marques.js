"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Marques = void 0;
var collection_1 = require("../collection/collection");
var Marques = /** @class */ (function (_super) {
    __extends(Marques, _super);
    function Marques() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marques.prototype["delete"] = function (element) {
        throw new Error("Method not implemented.");
    };
    /**
     * Override (réécriture de méthode)
     * @param element
     */
    Marques.prototype.add = function (element) {
        if (!this.isInArray(element)) {
            this.liste.push(element);
        }
    };
    Marques.prototype.isInArray = function (marque) {
        var isInArray = false;
        for (var i = 0; i < this.liste.length; i++) {
            if (this.liste[i].getLibelle() === marque.getLibelle()) {
                isInArray = true;
            }
        }
        return isInArray;
    };
    return Marques;
}(collection_1.Collection));
exports.Marques = Marques;