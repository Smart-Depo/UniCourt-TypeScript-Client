"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaOfLaw = void 0;
var AreaOfLaw = (function () {
    function AreaOfLaw() {
    }
    AreaOfLaw.getAttributeTypeMap = function () {
        return AreaOfLaw.attributeTypeMap;
    };
    AreaOfLaw.discriminator = undefined;
    AreaOfLaw.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "caseClassId",
            "baseName": "caseClassId",
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
    return AreaOfLaw;
}());
exports.AreaOfLaw = AreaOfLaw;
//# sourceMappingURL=AreaOfLaw.js.map