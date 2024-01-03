"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatus = void 0;
var CaseStatus = (function () {
    function CaseStatus() {
    }
    CaseStatus.getAttributeTypeMap = function () {
        return CaseStatus.attributeTypeMap;
    };
    CaseStatus.discriminator = undefined;
    CaseStatus.attributeTypeMap = [
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
    return CaseStatus;
}());
exports.CaseStatus = CaseStatus;
//# sourceMappingURL=CaseStatus.js.map