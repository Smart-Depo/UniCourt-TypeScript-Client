"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtSystem1 = void 0;
var CourtSystem1 = (function () {
    function CourtSystem1() {
    }
    CourtSystem1.getAttributeTypeMap = function () {
        return CourtSystem1.attributeTypeMap;
    };
    CourtSystem1.discriminator = undefined;
    CourtSystem1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtTypeId",
            "baseName": "courtTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtSystemId",
            "baseName": "courtSystemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtType",
            "baseName": "courtType",
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
    return CourtSystem1;
}());
exports.CourtSystem1 = CourtSystem1;
//# sourceMappingURL=CourtSystem1.js.map