"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocketEntryBoundaryEnum = exports.DocketEntryDocketBadgeEnum = exports.DocketEntry = void 0;
var DocketEntry = (function () {
    function DocketEntry() {
    }
    DocketEntry.getAttributeTypeMap = function () {
        return DocketEntry.attributeTypeMap;
    };
    DocketEntry.discriminator = undefined;
    DocketEntry.attributeTypeMap = [
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
            "type": "DocketEntryDocketBadgeEnum",
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
            "type": "DocketEntryBoundaryEnum",
            "format": ""
        }
    ];
    return DocketEntry;
}());
exports.DocketEntry = DocketEntry;
var DocketEntryDocketBadgeEnum;
(function (DocketEntryDocketBadgeEnum) {
    DocketEntryDocketBadgeEnum["Docket"] = "DOCKET";
    DocketEntryDocketBadgeEnum["Charge"] = "CHARGE";
    DocketEntryDocketBadgeEnum["Hearing"] = "HEARING";
    DocketEntryDocketBadgeEnum["Judgement"] = "JUDGEMENT";
    DocketEntryDocketBadgeEnum["Financial"] = "FINANCIAL";
    DocketEntryDocketBadgeEnum["Disposition"] = "DISPOSITION";
    DocketEntryDocketBadgeEnum["Sentence"] = "SENTENCE";
    DocketEntryDocketBadgeEnum["Bond"] = "BOND";
    DocketEntryDocketBadgeEnum["Bail"] = "BAIL";
    DocketEntryDocketBadgeEnum["CauseOfAction"] = "CAUSE_OF_ACTION";
    DocketEntryDocketBadgeEnum["Arrest"] = "ARREST";
    DocketEntryDocketBadgeEnum["Warrant"] = "WARRANT";
    DocketEntryDocketBadgeEnum["Summon"] = "SUMMON";
    DocketEntryDocketBadgeEnum["Tickler"] = "TICKLER";
    DocketEntryDocketBadgeEnum["Opinion"] = "OPINION";
})(DocketEntryDocketBadgeEnum = exports.DocketEntryDocketBadgeEnum || (exports.DocketEntryDocketBadgeEnum = {}));
var DocketEntryBoundaryEnum;
(function (DocketEntryBoundaryEnum) {
    DocketEntryBoundaryEnum["First"] = "first";
    DocketEntryBoundaryEnum["Last"] = "last";
    DocketEntryBoundaryEnum["SingleDocketEntry"] = "single_docket_entry";
    DocketEntryBoundaryEnum["Null"] = "null";
})(DocketEntryBoundaryEnum = exports.DocketEntryBoundaryEnum || (exports.DocketEntryBoundaryEnum = {}));
//# sourceMappingURL=DocketEntry.js.map