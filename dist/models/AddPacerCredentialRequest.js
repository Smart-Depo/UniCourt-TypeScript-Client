"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPacerCredentialRequest = void 0;
var AddPacerCredentialRequest = (function () {
    function AddPacerCredentialRequest() {
    }
    AddPacerCredentialRequest.getAttributeTypeMap = function () {
        return AddPacerCredentialRequest.attributeTypeMap;
    };
    AddPacerCredentialRequest.discriminator = undefined;
    AddPacerCredentialRequest.attributeTypeMap = [
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
    return AddPacerCredentialRequest;
}());
exports.AddPacerCredentialRequest = AddPacerCredentialRequest;
//# sourceMappingURL=AddPacerCredentialRequest.js.map