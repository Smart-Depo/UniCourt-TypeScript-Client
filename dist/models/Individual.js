"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
var Individual = (function () {
    function Individual() {
    }
    Individual.getAttributeTypeMap = function () {
        return Individual.attributeTypeMap;
    };
    Individual.discriminator = undefined;
    Individual.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        }
    ];
    return Individual;
}());
exports.Individual = Individual;
//# sourceMappingURL=Individual.js.map