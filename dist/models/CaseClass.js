"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseClass = void 0;
var CaseClass = (function () {
    function CaseClass() {
    }
    CaseClass.getAttributeTypeMap = function () {
        return CaseClass.attributeTypeMap;
    };
    CaseClass.discriminator = undefined;
    CaseClass.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
    return CaseClass;
}());
exports.CaseClass = CaseClass;
//# sourceMappingURL=CaseClass.js.map