"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDocumentSourceDataStatusEnum = exports.CaseDocumentEstimatedOrderDurationEnum = exports.CaseDocument = void 0;
var CaseDocument = (function () {
    function CaseDocument() {
    }
    CaseDocument.getAttributeTypeMap = function () {
        return CaseDocument.attributeTypeMap;
    };
    CaseDocument.discriminator = undefined;
    CaseDocument.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentFiledDate",
            "baseName": "documentFiledDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentDocumentId",
            "baseName": "parentDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "childDocumentIdArray",
            "baseName": "childDocumentIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
            "format": ""
        },
        {
            "name": "isPreviewAvailable",
            "baseName": "isPreviewAvailable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "previewDocument",
            "baseName": "previewDocument",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "inLibrary",
            "baseName": "inLibrary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addedToLibraryDate",
            "baseName": "addedToLibraryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "estimatedOrderDuration",
            "baseName": "estimatedOrderDuration",
            "type": "CaseDocumentEstimatedOrderDurationEnum",
            "format": ""
        },
        {
            "name": "downloadAPI",
            "baseName": "downloadAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceDataStatus",
            "baseName": "sourceDataStatus",
            "type": "CaseDocumentSourceDataStatusEnum",
            "format": ""
        }
    ];
    return CaseDocument;
}());
exports.CaseDocument = CaseDocument;
var CaseDocumentEstimatedOrderDurationEnum;
(function (CaseDocumentEstimatedOrderDurationEnum) {
    CaseDocumentEstimatedOrderDurationEnum["EstimateUnavailable"] = "estimateUnavailable";
    CaseDocumentEstimatedOrderDurationEnum["WithinMinutes"] = "withinMinutes";
    CaseDocumentEstimatedOrderDurationEnum["WithinHours"] = "withinHours";
    CaseDocumentEstimatedOrderDurationEnum["WithinDays"] = "withinDays";
    CaseDocumentEstimatedOrderDurationEnum["WithinWeeks"] = "withinWeeks";
})(CaseDocumentEstimatedOrderDurationEnum = exports.CaseDocumentEstimatedOrderDurationEnum || (exports.CaseDocumentEstimatedOrderDurationEnum = {}));
var CaseDocumentSourceDataStatusEnum;
(function (CaseDocumentSourceDataStatusEnum) {
    CaseDocumentSourceDataStatusEnum["NoLongerAvailableInCourt"] = "NO_LONGER_AVAILABLE_IN_COURT";
    CaseDocumentSourceDataStatusEnum["SourceDeprecated"] = "SOURCE_DEPRECATED";
    CaseDocumentSourceDataStatusEnum["Sealed"] = "SEALED";
    CaseDocumentSourceDataStatusEnum["Null"] = "null";
})(CaseDocumentSourceDataStatusEnum = exports.CaseDocumentSourceDataStatusEnum || (exports.CaseDocumentSourceDataStatusEnum = {}));
//# sourceMappingURL=CaseDocument.js.map