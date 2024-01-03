"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCallbacks200Response = void 0;
var GetCallbacks200Response = (function () {
    function GetCallbacks200Response() {
    }
    GetCallbacks200Response.getAttributeTypeMap = function () {
        return GetCallbacks200Response.attributeTypeMap;
    };
    GetCallbacks200Response.discriminator = undefined;
    GetCallbacks200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentOrderCallbacks",
            "baseName": "caseDocumentOrderCallbacks",
            "type": "GetCallbacks200ResponseCaseDocumentOrderCallbacks",
            "format": ""
        },
        {
            "name": "caseExportCallbacks",
            "baseName": "caseExportCallbacks",
            "type": "GetCallbacks200ResponseCaseExportCallbacks",
            "format": ""
        }
    ];
    return GetCallbacks200Response;
}());
exports.GetCallbacks200Response = GetCallbacks200Response;
//# sourceMappingURL=GetCallbacks200Response.js.map