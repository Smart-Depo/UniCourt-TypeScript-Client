"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeGroup = void 0;
var CaseTypeGroup = (function () {
    function CaseTypeGroup() {
    }
    CaseTypeGroup.getAttributeTypeMap = function () {
        return CaseTypeGroup.attributeTypeMap;
    };
    CaseTypeGroup.discriminator = undefined;
    CaseTypeGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "name",
            "baseName": "name",
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
    return CaseTypeGroup;
}());
exports.CaseTypeGroup = CaseTypeGroup;
//# sourceMappingURL=CaseTypeGroup.js.map