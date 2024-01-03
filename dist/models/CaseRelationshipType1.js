"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseRelationshipType1 = void 0;
var CaseRelationshipType1 = (function () {
    function CaseRelationshipType1() {
    }
    CaseRelationshipType1.getAttributeTypeMap = function () {
        return CaseRelationshipType1.attributeTypeMap;
    };
    CaseRelationshipType1.discriminator = undefined;
    CaseRelationshipType1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseRelationshipTypeId",
            "baseName": "caseRelationshipTypeId",
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
    return CaseRelationshipType1;
}());
exports.CaseRelationshipType1 = CaseRelationshipType1;
//# sourceMappingURL=CaseRelationshipType1.js.map