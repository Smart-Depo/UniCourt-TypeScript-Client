"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseRelatedCasesRelatedCaseArrayInner = void 0;
var GetCase200ResponseRelatedCasesRelatedCaseArrayInner = (function () {
    function GetCase200ResponseRelatedCasesRelatedCaseArrayInner() {
    }
    GetCase200ResponseRelatedCasesRelatedCaseArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseRelatedCasesRelatedCaseArrayInner.attributeTypeMap;
    };
    GetCase200ResponseRelatedCasesRelatedCaseArrayInner.discriminator = undefined;
    GetCase200ResponseRelatedCasesRelatedCaseArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseNumber",
            "baseName": "caseNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseName",
            "baseName": "caseName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseRelationshipType",
            "baseName": "caseRelationshipType",
            "type": "CaseRelationshipType1",
            "format": ""
        },
        {
            "name": "sourceCaseRelationshipType",
            "baseName": "sourceCaseRelationshipType",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "additionalSourceData",
            "baseName": "additionalSourceData",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData",
            "format": ""
        },
        {
            "name": "caseAPI",
            "baseName": "caseAPI",
            "type": "string",
            "format": ""
        }
    ];
    return GetCase200ResponseRelatedCasesRelatedCaseArrayInner;
}());
exports.GetCase200ResponseRelatedCasesRelatedCaseArrayInner = GetCase200ResponseRelatedCasesRelatedCaseArrayInner;
//# sourceMappingURL=GetCase200ResponseRelatedCasesRelatedCaseArrayInner.js.map