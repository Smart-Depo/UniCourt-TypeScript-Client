"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseType = void 0;
var CaseType = (function () {
    function CaseType() {
    }
    CaseType.getAttributeTypeMap = function () {
        return CaseType.attributeTypeMap;
    };
    CaseType.discriminator = undefined;
    CaseType.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeId",
            "baseName": "caseTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClassId",
            "baseName": "caseClassId",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaOfLawId",
            "baseName": "areaOfLawId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeGroupId",
            "baseName": "caseTypeGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClass",
            "baseName": "caseClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaOfLaw",
            "baseName": "areaOfLaw",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeGroup",
            "baseName": "caseTypeGroup",
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
            "name": "saliCode",
            "baseName": "saliCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeTag",
            "baseName": "caseTypeTag",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return CaseType;
}());
exports.CaseType = CaseType;
//# sourceMappingURL=CaseType.js.map