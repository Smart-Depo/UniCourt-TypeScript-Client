"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCaseDocumentRequest = void 0;
var OrderCaseDocumentRequest = (function () {
    function OrderCaseDocumentRequest() {
    }
    OrderCaseDocumentRequest.getAttributeTypeMap = function () {
        return OrderCaseDocumentRequest.attributeTypeMap;
    };
    OrderCaseDocumentRequest.discriminator = undefined;
    OrderCaseDocumentRequest.attributeTypeMap = [
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
    return OrderCaseDocumentRequest;
}());
exports.OrderCaseDocumentRequest = OrderCaseDocumentRequest;
//# sourceMappingURL=OrderCaseDocumentRequest.js.map