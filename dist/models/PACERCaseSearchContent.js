"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERCaseSearchContentPclJurisdictionTypeEnum = exports.PACERCaseSearchContent = void 0;
var PACERCaseSearchContent = (function () {
    function PACERCaseSearchContent() {
    }
    PACERCaseSearchContent.getAttributeTypeMap = function () {
        return PACERCaseSearchContent.attributeTypeMap;
    };
    PACERCaseSearchContent.discriminator = undefined;
    PACERCaseSearchContent.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCaseLink",
            "baseName": "pclCaseLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJurisdictionType",
            "baseName": "pclJurisdictionType",
            "type": "PACERCaseSearchContentPclJurisdictionTypeEnum",
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
            "name": "pclJpmlNumber",
            "baseName": "pclJpmlNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pclMdlCourtId",
            "baseName": "pclMdlCourtId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlDateOrdered",
            "baseName": "pclMdlDateOrdered",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlDateReceived",
            "baseName": "pclMdlDateReceived",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlExtension",
            "baseName": "pclMdlExtension",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlJudgeLastName",
            "baseName": "pclMdlJudgeLastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlLittype",
            "baseName": "pclMdlLittype",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlStatus",
            "baseName": "pclMdlStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlTransferee",
            "baseName": "pclMdlTransferee",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclMdlTransfereeDistrict",
            "baseName": "pclMdlTransfereeDistrict",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilCtoNumber",
            "baseName": "pclCivilCtoNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateDisposition",
            "baseName": "pclCivilDateDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateInitiated",
            "baseName": "pclCivilDateInitiated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilDateTerminated",
            "baseName": "pclCivilDateTerminated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatDisposition",
            "baseName": "pclCivilStatDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatInitiated",
            "baseName": "pclCivilStatInitiated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilStatTerminated",
            "baseName": "pclCivilStatTerminated",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclCivilTransferee",
            "baseName": "pclCivilTransferee",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclBankruptcyChapter",
            "baseName": "pclBankruptcyChapter",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateDischarged",
            "baseName": "pclDateDischarged",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateDismissed",
            "baseName": "pclDateDismissed",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateReopened",
            "baseName": "pclDateReopened",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDateTermed",
            "baseName": "pclDateTermed",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDisposition",
            "baseName": "pclDisposition",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclDispositionMethod",
            "baseName": "pclDispositionMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointBankruptcyFlag",
            "baseName": "pclJointBankruptcyFlag",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDischargedDate",
            "baseName": "pclJointDischargedDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDismissedDate",
            "baseName": "pclJointDismissedDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclJointDispositionMethod",
            "baseName": "pclJointDispositionMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "pclNatureOfSuit",
            "baseName": "pclNatureOfSuit",
            "type": "string",
            "format": ""
        }
    ];
    return PACERCaseSearchContent;
}());
exports.PACERCaseSearchContent = PACERCaseSearchContent;
var PACERCaseSearchContentPclJurisdictionTypeEnum;
(function (PACERCaseSearchContentPclJurisdictionTypeEnum) {
    PACERCaseSearchContentPclJurisdictionTypeEnum["Appellate"] = "Appellate";
    PACERCaseSearchContentPclJurisdictionTypeEnum["Bankruptcy"] = "Bankruptcy";
    PACERCaseSearchContentPclJurisdictionTypeEnum["Criminal"] = "Criminal";
    PACERCaseSearchContentPclJurisdictionTypeEnum["Civil"] = "Civil";
    PACERCaseSearchContentPclJurisdictionTypeEnum["MultiDistrictLitigation"] = "Multi-district Litigation";
    PACERCaseSearchContentPclJurisdictionTypeEnum["Null"] = "null";
})(PACERCaseSearchContentPclJurisdictionTypeEnum = exports.PACERCaseSearchContentPclJurisdictionTypeEnum || (exports.PACERCaseSearchContentPclJurisdictionTypeEnum = {}));
//# sourceMappingURL=PACERCaseSearchContent.js.map