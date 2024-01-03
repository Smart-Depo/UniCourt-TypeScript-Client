"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseFiledDateMonthStringEnum = exports.CaseCountAnalyticsByCaseFiledDateQuarterEnum = exports.CaseCountAnalyticsByCaseFiledDateGroupedByEnum = exports.CaseCountAnalyticsByCaseFiledDate = void 0;
var CaseCountAnalyticsByCaseFiledDate = (function () {
    function CaseCountAnalyticsByCaseFiledDate() {
    }
    CaseCountAnalyticsByCaseFiledDate.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseFiledDate.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseFiledDate.discriminator = undefined;
    CaseCountAnalyticsByCaseFiledDate.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "groupedBy",
            "baseName": "groupedBy",
            "type": "CaseCountAnalyticsByCaseFiledDateGroupedByEnum",
            "format": ""
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": ""
        },
        {
            "name": "quarter",
            "baseName": "quarter",
            "type": "CaseCountAnalyticsByCaseFiledDateQuarterEnum",
            "format": ""
        },
        {
            "name": "monthString",
            "baseName": "monthString",
            "type": "CaseCountAnalyticsByCaseFiledDateMonthStringEnum",
            "format": ""
        },
        {
            "name": "monthInt",
            "baseName": "monthInt",
            "type": "number",
            "format": ""
        },
        {
            "name": "weekOfYear",
            "baseName": "weekOfYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "weekOfMonth",
            "baseName": "weekOfMonth",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseFiledDate;
}());
exports.CaseCountAnalyticsByCaseFiledDate = CaseCountAnalyticsByCaseFiledDate;
var CaseCountAnalyticsByCaseFiledDateGroupedByEnum;
(function (CaseCountAnalyticsByCaseFiledDateGroupedByEnum) {
    CaseCountAnalyticsByCaseFiledDateGroupedByEnum["Yearly"] = "Yearly";
    CaseCountAnalyticsByCaseFiledDateGroupedByEnum["Quarterly"] = "Quarterly";
    CaseCountAnalyticsByCaseFiledDateGroupedByEnum["Monthly"] = "Monthly";
    CaseCountAnalyticsByCaseFiledDateGroupedByEnum["Weekly"] = "Weekly";
})(CaseCountAnalyticsByCaseFiledDateGroupedByEnum = exports.CaseCountAnalyticsByCaseFiledDateGroupedByEnum || (exports.CaseCountAnalyticsByCaseFiledDateGroupedByEnum = {}));
var CaseCountAnalyticsByCaseFiledDateQuarterEnum;
(function (CaseCountAnalyticsByCaseFiledDateQuarterEnum) {
    CaseCountAnalyticsByCaseFiledDateQuarterEnum["Q1"] = "Q1";
    CaseCountAnalyticsByCaseFiledDateQuarterEnum["Q2"] = "Q2";
    CaseCountAnalyticsByCaseFiledDateQuarterEnum["Q3"] = "Q3";
    CaseCountAnalyticsByCaseFiledDateQuarterEnum["Q4"] = "Q4";
    CaseCountAnalyticsByCaseFiledDateQuarterEnum["Null"] = "null";
})(CaseCountAnalyticsByCaseFiledDateQuarterEnum = exports.CaseCountAnalyticsByCaseFiledDateQuarterEnum || (exports.CaseCountAnalyticsByCaseFiledDateQuarterEnum = {}));
var CaseCountAnalyticsByCaseFiledDateMonthStringEnum;
(function (CaseCountAnalyticsByCaseFiledDateMonthStringEnum) {
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["January"] = "January";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["February"] = "February";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["March"] = "March";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["April"] = "April";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["May"] = "May";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["June"] = "June";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["July"] = "July";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["August"] = "August";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["September"] = "September";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["October"] = "October";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["November"] = "November";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["December"] = "December";
    CaseCountAnalyticsByCaseFiledDateMonthStringEnum["Null"] = "null";
})(CaseCountAnalyticsByCaseFiledDateMonthStringEnum = exports.CaseCountAnalyticsByCaseFiledDateMonthStringEnum || (exports.CaseCountAnalyticsByCaseFiledDateMonthStringEnum = {}));
//# sourceMappingURL=CaseCountAnalyticsByCaseFiledDate.js.map