"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseExportCallbackStatusEnum = exports.CaseExportCallback = void 0;
var CaseExportCallback = (function () {
    function CaseExportCallback() {
    }
    CaseExportCallback.getAttributeTypeMap = function () {
        return CaseExportCallback.attributeTypeMap;
    };
    CaseExportCallback.discriminator = undefined;
    CaseExportCallback.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseExportCallbackId",
            "baseName": "caseExportCallbackId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseId",
            "baseName": "caseId",
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
            "type": "CaseExportCallbackStatusEnum",
            "format": ""
        },
        {
            "name": "caseExportCallbackAPI",
            "baseName": "caseExportCallbackAPI",
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
    return CaseExportCallback;
}());
exports.CaseExportCallback = CaseExportCallback;
var CaseExportCallbackStatusEnum;
(function (CaseExportCallbackStatusEnum) {
    CaseExportCallbackStatusEnum["Complete"] = "COMPLETE";
    CaseExportCallbackStatusEnum["Failure"] = "FAILURE";
    CaseExportCallbackStatusEnum["InProgress"] = "IN_PROGRESS";
})(CaseExportCallbackStatusEnum = exports.CaseExportCallbackStatusEnum || (exports.CaseExportCallbackStatusEnum = {}));
//# sourceMappingURL=CaseExportCallback.js.map