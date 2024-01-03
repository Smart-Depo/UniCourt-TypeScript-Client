"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtType = void 0;
var CourtType = (function () {
    function CourtType() {
    }
    CourtType.getAttributeTypeMap = function () {
        return CourtType.attributeTypeMap;
    };
    CourtType.discriminator = undefined;
    CourtType.attributeTypeMap = [
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
    return CourtType;
}());
exports.CourtType = CourtType;
//# sourceMappingURL=CourtType.js.map