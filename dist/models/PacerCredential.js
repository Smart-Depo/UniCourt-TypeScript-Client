"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacerCredential = void 0;
var PacerCredential = (function () {
    function PacerCredential() {
    }
    PacerCredential.getAttributeTypeMap = function () {
        return PacerCredential.attributeTypeMap;
    };
    PacerCredential.discriminator = undefined;
    PacerCredential.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerUserId",
            "baseName": "pacerUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultPacerClientCode",
            "baseName": "defaultPacerClientCode",
            "type": "string",
            "format": ""
        }
    ];
    return PacerCredential;
}());
exports.PacerCredential = PacerCredential;
//# sourceMappingURL=PacerCredential.js.map