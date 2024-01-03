"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCase200ResponseStatusEnum = exports.UpdateCase200Response = void 0;
var UpdateCase200Response = (function () {
    function UpdateCase200Response() {
    }
    UpdateCase200Response.getAttributeTypeMap = function () {
        return UpdateCase200Response.attributeTypeMap;
    };
    UpdateCase200Response.discriminator = undefined;
    UpdateCase200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "status",
            "baseName": "status",
            "type": "UpdateCase200ResponseStatusEnum",
            "format": ""
        },
        {
            "name": "requestedDate",
            "baseName": "requestedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "caseAPI",
            "baseName": "caseAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "CaseUpdatePacerOptionsResponse1",
            "format": ""
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "Exception1",
            "format": ""
        },
        {
            "name": "_case",
            "baseName": "case",
            "type": "GetCase200Response",
            "format": ""
        }
    ];
    return UpdateCase200Response;
}());
exports.UpdateCase200Response = UpdateCase200Response;
var UpdateCase200ResponseStatusEnum;
(function (UpdateCase200ResponseStatusEnum) {
    UpdateCase200ResponseStatusEnum["Complete"] = "COMPLETE";
    UpdateCase200ResponseStatusEnum["Failure"] = "FAILURE";
    UpdateCase200ResponseStatusEnum["InProgress"] = "IN_PROGRESS";
})(UpdateCase200ResponseStatusEnum = exports.UpdateCase200ResponseStatusEnum || (exports.UpdateCase200ResponseStatusEnum = {}));
//# sourceMappingURL=UpdateCase200Response.js.map