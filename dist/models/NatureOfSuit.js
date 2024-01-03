"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureOfSuit = void 0;
var NatureOfSuit = (function () {
    function NatureOfSuit() {
    }
    NatureOfSuit.getAttributeTypeMap = function () {
        return NatureOfSuit.attributeTypeMap;
    };
    NatureOfSuit.discriminator = undefined;
    NatureOfSuit.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceText",
            "baseName": "sourceText",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "section",
            "baseName": "section",
            "type": "string",
            "format": ""
        }
    ];
    return NatureOfSuit;
}());
exports.NatureOfSuit = NatureOfSuit;
//# sourceMappingURL=NatureOfSuit.js.map