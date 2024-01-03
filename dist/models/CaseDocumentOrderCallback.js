"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDocumentOrderCallbackStatusEnum = exports.CaseDocumentOrderCallback = void 0;
var CaseDocumentOrderCallback = (function () {
    function CaseDocumentOrderCallback() {
    }
    CaseDocumentOrderCallback.getAttributeTypeMap = function () {
        return CaseDocumentOrderCallback.attributeTypeMap;
    };
    CaseDocumentOrderCallback.discriminator = undefined;
    CaseDocumentOrderCallback.attributeTypeMap = [
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
            "type": "CaseDocumentOrderCallbackStatusEnum",
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
    return CaseDocumentOrderCallback;
}());
exports.CaseDocumentOrderCallback = CaseDocumentOrderCallback;
var CaseDocumentOrderCallbackStatusEnum;
(function (CaseDocumentOrderCallbackStatusEnum) {
    CaseDocumentOrderCallbackStatusEnum["Complete"] = "COMPLETE";
    CaseDocumentOrderCallbackStatusEnum["Failure"] = "FAILURE";
    CaseDocumentOrderCallbackStatusEnum["InProgress"] = "IN_PROGRESS";
    CaseDocumentOrderCallbackStatusEnum["Delayed"] = "DELAYED";
})(CaseDocumentOrderCallbackStatusEnum = exports.CaseDocumentOrderCallbackStatusEnum || (exports.CaseDocumentOrderCallbackStatusEnum = {}));
//# sourceMappingURL=CaseDocumentOrderCallback.js.map