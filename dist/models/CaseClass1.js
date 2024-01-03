"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseClass1 = void 0;
var CaseClass1 = (function () {
    function CaseClass1() {
    }
    CaseClass1.getAttributeTypeMap = function () {
        return CaseClass1.attributeTypeMap;
    };
    CaseClass1.discriminator = undefined;
    CaseClass1.attributeTypeMap = [
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
    return CaseClass1;
}());
exports.CaseClass1 = CaseClass1;
//# sourceMappingURL=CaseClass1.js.map