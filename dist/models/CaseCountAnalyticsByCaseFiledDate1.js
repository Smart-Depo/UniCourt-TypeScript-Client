"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseFiledDate1MonthStringEnum = exports.CaseCountAnalyticsByCaseFiledDate1QuarterEnum = exports.CaseCountAnalyticsByCaseFiledDate1GroupedByEnum = exports.CaseCountAnalyticsByCaseFiledDate1 = void 0;
var CaseCountAnalyticsByCaseFiledDate1 = (function () {
    function CaseCountAnalyticsByCaseFiledDate1() {
    }
    CaseCountAnalyticsByCaseFiledDate1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseFiledDate1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseFiledDate1.discriminator = undefined;
    CaseCountAnalyticsByCaseFiledDate1.attributeTypeMap = [
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
            "type": "CaseCountAnalyticsByCaseFiledDate1GroupedByEnum",
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
            "type": "CaseCountAnalyticsByCaseFiledDate1QuarterEnum",
            "format": ""
        },
        {
            "name": "monthString",
            "baseName": "monthString",
            "type": "CaseCountAnalyticsByCaseFiledDate1MonthStringEnum",
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
    return CaseCountAnalyticsByCaseFiledDate1;
}());
exports.CaseCountAnalyticsByCaseFiledDate1 = CaseCountAnalyticsByCaseFiledDate1;
var CaseCountAnalyticsByCaseFiledDate1GroupedByEnum;
(function (CaseCountAnalyticsByCaseFiledDate1GroupedByEnum) {
    CaseCountAnalyticsByCaseFiledDate1GroupedByEnum["Yearly"] = "Yearly";
    CaseCountAnalyticsByCaseFiledDate1GroupedByEnum["Quarterly"] = "Quarterly";
    CaseCountAnalyticsByCaseFiledDate1GroupedByEnum["Monthly"] = "Monthly";
    CaseCountAnalyticsByCaseFiledDate1GroupedByEnum["Weekly"] = "Weekly";
})(CaseCountAnalyticsByCaseFiledDate1GroupedByEnum = exports.CaseCountAnalyticsByCaseFiledDate1GroupedByEnum || (exports.CaseCountAnalyticsByCaseFiledDate1GroupedByEnum = {}));
var CaseCountAnalyticsByCaseFiledDate1QuarterEnum;
(function (CaseCountAnalyticsByCaseFiledDate1QuarterEnum) {
    CaseCountAnalyticsByCaseFiledDate1QuarterEnum["Q1"] = "Q1";
    CaseCountAnalyticsByCaseFiledDate1QuarterEnum["Q2"] = "Q2";
    CaseCountAnalyticsByCaseFiledDate1QuarterEnum["Q3"] = "Q3";
    CaseCountAnalyticsByCaseFiledDate1QuarterEnum["Q4"] = "Q4";
    CaseCountAnalyticsByCaseFiledDate1QuarterEnum["Null"] = "null";
})(CaseCountAnalyticsByCaseFiledDate1QuarterEnum = exports.CaseCountAnalyticsByCaseFiledDate1QuarterEnum || (exports.CaseCountAnalyticsByCaseFiledDate1QuarterEnum = {}));
var CaseCountAnalyticsByCaseFiledDate1MonthStringEnum;
(function (CaseCountAnalyticsByCaseFiledDate1MonthStringEnum) {
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["January"] = "January";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["February"] = "February";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["March"] = "March";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["April"] = "April";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["May"] = "May";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["June"] = "June";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["July"] = "July";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["August"] = "August";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["September"] = "September";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["October"] = "October";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["November"] = "November";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["December"] = "December";
    CaseCountAnalyticsByCaseFiledDate1MonthStringEnum["Null"] = "null";
})(CaseCountAnalyticsByCaseFiledDate1MonthStringEnum = exports.CaseCountAnalyticsByCaseFiledDate1MonthStringEnum || (exports.CaseCountAnalyticsByCaseFiledDate1MonthStringEnum = {}));
//# sourceMappingURL=CaseCountAnalyticsByCaseFiledDate1.js.map