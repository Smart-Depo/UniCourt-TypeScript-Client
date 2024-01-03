"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacerCredentialRequest = void 0;
var PacerCredentialRequest = (function () {
    function PacerCredentialRequest() {
    }
    PacerCredentialRequest.getAttributeTypeMap = function () {
        return PacerCredentialRequest.attributeTypeMap;
    };
    PacerCredentialRequest.discriminator = undefined;
    PacerCredentialRequest.attributeTypeMap = [
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
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }
    ];
    return PacerCredentialRequest;
}());
exports.PacerCredentialRequest = PacerCredentialRequest;
//# sourceMappingURL=PacerCredentialRequest.js.map