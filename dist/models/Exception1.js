"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception1 = void 0;
var Exception1 = (function () {
    function Exception1() {
    }
    Exception1.getAttributeTypeMap = function () {
        return Exception1.attributeTypeMap;
    };
    Exception1.discriminator = undefined;
    Exception1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        }
    ];
    return Exception1;
}());
exports.Exception1 = Exception1;
//# sourceMappingURL=Exception1.js.map