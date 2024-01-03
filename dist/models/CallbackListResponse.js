"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackListResponse = void 0;
var CallbackListResponse = (function () {
    function CallbackListResponse() {
    }
    CallbackListResponse.getAttributeTypeMap = function () {
        return CallbackListResponse.attributeTypeMap;
    };
    CallbackListResponse.discriminator = undefined;
    CallbackListResponse.attributeTypeMap = [
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
    return CallbackListResponse;
}());
exports.CallbackListResponse = CallbackListResponse;
//# sourceMappingURL=CallbackListResponse.js.map