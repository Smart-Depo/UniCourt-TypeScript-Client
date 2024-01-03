"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum = exports.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner = void 0;
var GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner = (function () {
    function GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner() {
    }
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner.getAttributeTypeMap = function () {
        return GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner.attributeTypeMap;
    };
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner.discriminator = undefined;
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner.attributeTypeMap = [
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
            "type": "GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum",
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
    return GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner;
}());
exports.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner = GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner;
var GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum;
(function (GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum) {
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum["Complete"] = "COMPLETE";
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum["Failure"] = "FAILURE";
    GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum["InProgress"] = "IN_PROGRESS";
})(GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum = exports.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum || (exports.GetCaseUpdates200ResponseCaseUpdatePreviewArrayInnerStatusEnum = {}));
//# sourceMappingURL=GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner.js.map