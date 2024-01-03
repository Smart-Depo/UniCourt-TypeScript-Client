"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatusGroup = void 0;
var CaseStatusGroup = (function () {
    function CaseStatusGroup() {
    }
    CaseStatusGroup.getAttributeTypeMap = function () {
        return CaseStatusGroup.attributeTypeMap;
    };
    CaseStatusGroup.discriminator = undefined;
    CaseStatusGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
    return CaseStatusGroup;
}());
exports.CaseStatusGroup = CaseStatusGroup;
//# sourceMappingURL=CaseStatusGroup.js.map