"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDocumentOrderRequest = void 0;
var CaseDocumentOrderRequest = (function () {
    function CaseDocumentOrderRequest() {
    }
    CaseDocumentOrderRequest.getAttributeTypeMap = function () {
        return CaseDocumentOrderRequest.attributeTypeMap;
    };
    CaseDocumentOrderRequest.discriminator = undefined;
    CaseDocumentOrderRequest.attributeTypeMap = [
        {
            "name": "caseDocumentId",
            "baseName": "caseDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPreviewOnly",
            "baseName": "isPreviewOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "OrderCaseDocumentRequestPacerOptions",
            "format": ""
        }
    ];
    return CaseDocumentOrderRequest;
}());
exports.CaseDocumentOrderRequest = CaseDocumentOrderRequest;
//# sourceMappingURL=CaseDocumentOrderRequest.js.map