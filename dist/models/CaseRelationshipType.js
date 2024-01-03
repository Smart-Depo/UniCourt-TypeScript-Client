"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseRelationshipType = void 0;
var CaseRelationshipType = (function () {
    function CaseRelationshipType() {
    }
    CaseRelationshipType.getAttributeTypeMap = function () {
        return CaseRelationshipType.attributeTypeMap;
    };
    CaseRelationshipType.discriminator = undefined;
    CaseRelationshipType.attributeTypeMap = [
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
    return CaseRelationshipType;
}());
exports.CaseRelationshipType = CaseRelationshipType;
//# sourceMappingURL=CaseRelationshipType.js.map