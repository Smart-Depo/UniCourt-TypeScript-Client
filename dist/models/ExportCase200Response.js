"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportCase200ResponseStatusEnum = exports.ExportCase200Response = void 0;
var ExportCase200Response = (function () {
    function ExportCase200Response() {
    }
    ExportCase200Response.getAttributeTypeMap = function () {
        return ExportCase200Response.attributeTypeMap;
    };
    ExportCase200Response.discriminator = undefined;
    ExportCase200Response.attributeTypeMap = [
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
            "type": "ExportCase200ResponseStatusEnum",
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
    return ExportCase200Response;
}());
exports.ExportCase200Response = ExportCase200Response;
var ExportCase200ResponseStatusEnum;
(function (ExportCase200ResponseStatusEnum) {
    ExportCase200ResponseStatusEnum["Complete"] = "COMPLETE";
    ExportCase200ResponseStatusEnum["Failure"] = "FAILURE";
    ExportCase200ResponseStatusEnum["InProgress"] = "IN_PROGRESS";
})(ExportCase200ResponseStatusEnum = exports.ExportCase200ResponseStatusEnum || (exports.ExportCase200ResponseStatusEnum = {}));
//# sourceMappingURL=ExportCase200Response.js.map