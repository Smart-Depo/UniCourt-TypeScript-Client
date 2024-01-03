"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var Exception = (function () {
    function Exception() {
    }
    Exception.getAttributeTypeMap = function () {
        return Exception.attributeTypeMap;
    };
    Exception.discriminator = undefined;
    Exception.attributeTypeMap = [
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
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map