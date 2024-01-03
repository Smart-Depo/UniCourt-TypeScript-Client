"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner = void 0;
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner = (function () {
    function GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner() {
    }
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner.attributeTypeMap;
    };
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner.discriminator = undefined;
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner.attributeTypeMap = [
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
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum",
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
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum",
            "format": ""
        }
    ];
    return GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner;
}());
exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner = GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner;
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum;
(function (GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum) {
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum["EstimateUnavailable"] = "estimateUnavailable";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum["WithinMinutes"] = "withinMinutes";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum["WithinHours"] = "withinHours";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum["WithinDays"] = "withinDays";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum["WithinWeeks"] = "withinWeeks";
})(GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum || (exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerEstimatedOrderDurationEnum = {}));
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum;
(function (GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum) {
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum["NoLongerAvailableInCourt"] = "NO_LONGER_AVAILABLE_IN_COURT";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum["SourceDeprecated"] = "SOURCE_DEPRECATED";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum["Sealed"] = "SEALED";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum["Null"] = "null";
})(GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum || (exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerSourceDataStatusEnum = {}));
//# sourceMappingURL=GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner.js.map