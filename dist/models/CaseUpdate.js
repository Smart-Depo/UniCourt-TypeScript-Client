"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateStatusEnum = exports.CaseUpdate = void 0;
var CaseUpdate = (function () {
    function CaseUpdate() {
    }
    CaseUpdate.getAttributeTypeMap = function () {
        return CaseUpdate.attributeTypeMap;
    };
    CaseUpdate.discriminator = undefined;
    CaseUpdate.attributeTypeMap = [
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
            "type": "CaseUpdateStatusEnum",
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
    return CaseUpdate;
}());
exports.CaseUpdate = CaseUpdate;
var CaseUpdateStatusEnum;
(function (CaseUpdateStatusEnum) {
    CaseUpdateStatusEnum["Complete"] = "COMPLETE";
    CaseUpdateStatusEnum["Failure"] = "FAILURE";
    CaseUpdateStatusEnum["InProgress"] = "IN_PROGRESS";
})(CaseUpdateStatusEnum = exports.CaseUpdateStatusEnum || (exports.CaseUpdateStatusEnum = {}));
//# sourceMappingURL=CaseUpdate.js.map