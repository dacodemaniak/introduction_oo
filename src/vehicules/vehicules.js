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
exports.Vehicules = void 0;
var collection_1 = require("../collection/collection");
var Vehicules = /** @class */ (function (_super) {
    __extends(Vehicules, _super);
    function Vehicules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vehicules.prototype["delete"] = function (element) {
        throw new Error("Method not implemented.");
    };
    return Vehicules;
}(collection_1.Collection));
exports.Vehicules = Vehicules;
