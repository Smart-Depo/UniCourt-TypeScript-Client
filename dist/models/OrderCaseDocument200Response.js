"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCaseDocument200ResponseStatusEnum = exports.OrderCaseDocument200Response = void 0;
var OrderCaseDocument200Response = (function () {
    function OrderCaseDocument200Response() {
    }
    OrderCaseDocument200Response.getAttributeTypeMap = function () {
        return OrderCaseDocument200Response.attributeTypeMap;
    };
    OrderCaseDocument200Response.discriminator = undefined;
    OrderCaseDocument200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentOrderCallbackId",
            "baseName": "caseDocumentOrderCallbackId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentId",
            "baseName": "caseDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "callbackGeneratedDate",
            "baseName": "callbackGeneratedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderCaseDocument200ResponseStatusEnum",
            "format": ""
        },
        {
            "name": "caseDocument",
            "baseName": "caseDocument",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner",
            "format": ""
        },
        {
            "name": "caseDocumentOrderCallbackAPI",
            "baseName": "caseDocumentOrderCallbackAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "ExportFile1",
            "format": ""
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "Exception1",
            "format": ""
        }
    ];
    return OrderCaseDocument200Response;
}());
exports.OrderCaseDocument200Response = OrderCaseDocument200Response;
var OrderCaseDocument200ResponseStatusEnum;
(function (OrderCaseDocument200ResponseStatusEnum) {
    OrderCaseDocument200ResponseStatusEnum["Complete"] = "COMPLETE";
    OrderCaseDocument200ResponseStatusEnum["Failure"] = "FAILURE";
    OrderCaseDocument200ResponseStatusEnum["InProgress"] = "IN_PROGRESS";
    OrderCaseDocument200ResponseStatusEnum["Delayed"] = "DELAYED";
})(OrderCaseDocument200ResponseStatusEnum = exports.OrderCaseDocument200ResponseStatusEnum || (exports.OrderCaseDocument200ResponseStatusEnum = {}));
//# sourceMappingURL=OrderCaseDocument200Response.js.map