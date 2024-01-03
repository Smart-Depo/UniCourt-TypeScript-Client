"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedCase = void 0;
var RelatedCase = (function () {
    function RelatedCase() {
    }
    RelatedCase.getAttributeTypeMap = function () {
        return RelatedCase.attributeTypeMap;
    };
    RelatedCase.discriminator = undefined;
    RelatedCase.attributeTypeMap = [
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
    return RelatedCase;
}());
exports.RelatedCase = RelatedCase;
//# sourceMappingURL=RelatedCase.js.map