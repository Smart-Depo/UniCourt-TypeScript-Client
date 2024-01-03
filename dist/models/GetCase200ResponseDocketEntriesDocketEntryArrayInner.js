"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInner = void 0;
var GetCase200ResponseDocketEntriesDocketEntryArrayInner = (function () {
    function GetCase200ResponseDocketEntriesDocketEntryArrayInner() {
    }
    GetCase200ResponseDocketEntriesDocketEntryArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseDocketEntriesDocketEntryArrayInner.attributeTypeMap;
    };
    GetCase200ResponseDocketEntriesDocketEntryArrayInner.discriminator = undefined;
    GetCase200ResponseDocketEntriesDocketEntryArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "docketEntryDate",
            "baseName": "docketEntryDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "docketNumber",
            "baseName": "docketNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "docketBadge",
            "baseName": "docketBadge",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "textStructured",
            "baseName": "textStructured",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData",
            "format": ""
        },
        {
            "name": "referencedDocketNumberArray",
            "baseName": "referencedDocketNumberArray",
            "type": "Array<GetCase200ResponseDocketEntriesDocketEntryArrayInnerReferencedDocketNumberArrayInner>",
            "format": ""
        },
        {
            "name": "docketEntryPrimaryDocuments",
            "baseName": "docketEntryPrimaryDocuments",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments",
            "format": ""
        },
        {
            "name": "docketEntrySecondaryDocuments",
            "baseName": "docketEntrySecondaryDocuments",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments",
            "format": ""
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "boundary",
            "baseName": "boundary",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum",
            "format": ""
        }
    ];
    return GetCase200ResponseDocketEntriesDocketEntryArrayInner;
}());
exports.GetCase200ResponseDocketEntriesDocketEntryArrayInner = GetCase200ResponseDocketEntriesDocketEntryArrayInner;
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum;
(function (GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum) {
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Docket"] = "DOCKET";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Charge"] = "CHARGE";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Hearing"] = "HEARING";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Judgement"] = "JUDGEMENT";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Financial"] = "FINANCIAL";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Disposition"] = "DISPOSITION";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Sentence"] = "SENTENCE";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Bond"] = "BOND";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Bail"] = "BAIL";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["CauseOfAction"] = "CAUSE_OF_ACTION";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Arrest"] = "ARREST";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Warrant"] = "WARRANT";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Summon"] = "SUMMON";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Tickler"] = "TICKLER";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum["Opinion"] = "OPINION";
})(GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum || (exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketBadgeEnum = {}));
var GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum;
(function (GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum) {
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum["First"] = "first";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum["Last"] = "last";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum["SingleDocketEntry"] = "single_docket_entry";
    GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum["Null"] = "null";
})(GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum = exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum || (exports.GetCase200ResponseDocketEntriesDocketEntryArrayInnerBoundaryEnum = {}));
//# sourceMappingURL=GetCase200ResponseDocketEntriesDocketEntryArrayInner.js.map