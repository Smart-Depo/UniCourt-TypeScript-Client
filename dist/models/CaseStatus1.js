"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatus1 = void 0;
var CaseStatus1 = (function () {
    function CaseStatus1() {
    }
    CaseStatus1.getAttributeTypeMap = function () {
        return CaseStatus1.attributeTypeMap;
    };
    CaseStatus1.discriminator = undefined;
    CaseStatus1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusId",
            "baseName": "caseStatusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusGroupId",
            "baseName": "caseStatusGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusGroup",
            "baseName": "caseStatusGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClassArray",
            "baseName": "caseClassArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return CaseStatus1;
}());
exports.CaseStatus1 = CaseStatus1;
//# sourceMappingURL=CaseStatus1.js.map