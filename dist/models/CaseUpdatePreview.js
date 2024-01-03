"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePreviewStatusEnum = exports.CaseUpdatePreview = void 0;
var CaseUpdatePreview = (function () {
    function CaseUpdatePreview() {
    }
    CaseUpdatePreview.getAttributeTypeMap = function () {
        return CaseUpdatePreview.attributeTypeMap;
    };
    CaseUpdatePreview.discriminator = undefined;
    CaseUpdatePreview.attributeTypeMap = [
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
            "type": "CaseUpdatePreviewStatusEnum",
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
        }
    ];
    return CaseUpdatePreview;
}());
exports.CaseUpdatePreview = CaseUpdatePreview;
var CaseUpdatePreviewStatusEnum;
(function (CaseUpdatePreviewStatusEnum) {
    CaseUpdatePreviewStatusEnum["Complete"] = "COMPLETE";
    CaseUpdatePreviewStatusEnum["Failure"] = "FAILURE";
    CaseUpdatePreviewStatusEnum["InProgress"] = "IN_PROGRESS";
})(CaseUpdatePreviewStatusEnum = exports.CaseUpdatePreviewStatusEnum || (exports.CaseUpdatePreviewStatusEnum = {}));
//# sourceMappingURL=CaseUpdatePreview.js.map