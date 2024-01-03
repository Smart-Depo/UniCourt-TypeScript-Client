"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERPartySearchContentPclJurisdictionTypeEnum = exports.PACERPartySearchContent = void 0;
var PACERPartySearchContent = (function () {
    function PACERPartySearchContent() {
    }
    PACERPartySearchContent.getAttributeTypeMap = function () {
        return PACERPartySearchContent.attributeTypeMap;
    };
    PACERPartySearchContent.discriminator = undefined;
    PACERPartySearchContent.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJurisdictionType",
            "baseName": "pclJurisdictionType",
            "type": "PACERPartySearchContentPclJurisdictionTypeEnum",
            "format": ""
        },
        {
            "name": "pclCaseId",
            "baseName": "pclCaseId",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCaseNumberFull",
            "baseName": "pclCaseNumberFull",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseTitle",
            "baseName": "pclCaseTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseOffice",
            "baseName": "pclCaseOffice",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseNumber",
            "baseName": "pclCaseNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCaseType",
            "baseName": "pclCaseType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseYear",
            "baseName": "pclCaseYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclCourtId",
            "baseName": "pclCourtId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateFiled",
            "baseName": "pclDateFiled",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclLastName",
            "baseName": "pclLastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclFirstName",
            "baseName": "pclFirstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMiddleName",
            "baseName": "pclMiddleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclGeneration",
            "baseName": "pclGeneration",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclPartyRole",
            "baseName": "pclPartyRole",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclPartyType",
            "baseName": "pclPartyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCourtCase",
            "baseName": "pclCourtCase",
            "type": "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent",
            "format": ""
        }
    ];
    return PACERPartySearchContent;
}());
exports.PACERPartySearchContent = PACERPartySearchContent;
var PACERPartySearchContentPclJurisdictionTypeEnum;
(function (PACERPartySearchContentPclJurisdictionTypeEnum) {
    PACERPartySearchContentPclJurisdictionTypeEnum["Appellate"] = "Appellate";
    PACERPartySearchContentPclJurisdictionTypeEnum["Bankruptcy"] = "Bankruptcy";
    PACERPartySearchContentPclJurisdictionTypeEnum["Criminal"] = "Criminal";
    PACERPartySearchContentPclJurisdictionTypeEnum["Civil"] = "Civil";
    PACERPartySearchContentPclJurisdictionTypeEnum["MultiDistrictLitigation"] = "Multi-district Litigation";
    PACERPartySearchContentPclJurisdictionTypeEnum["Null"] = "null";
})(PACERPartySearchContentPclJurisdictionTypeEnum = exports.PACERPartySearchContentPclJurisdictionTypeEnum || (exports.PACERPartySearchContentPclJurisdictionTypeEnum = {}));
//# sourceMappingURL=PACERPartySearchContent.js.map