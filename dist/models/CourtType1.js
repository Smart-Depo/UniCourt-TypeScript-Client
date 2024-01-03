"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtType1 = void 0;
var CourtType1 = (function () {
    function CourtType1() {
    }
    CourtType1.getAttributeTypeMap = function () {
        return CourtType1.attributeTypeMap;
    };
    CourtType1.discriminator = undefined;
    CourtType1.attributeTypeMap = [
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
    return CourtType1;
}());
exports.CourtType1 = CourtType1;
//# sourceMappingURL=CourtType1.js.map