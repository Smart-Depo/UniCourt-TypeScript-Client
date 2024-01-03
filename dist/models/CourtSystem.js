"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtSystem = void 0;
var CourtSystem = (function () {
    function CourtSystem() {
    }
    CourtSystem.getAttributeTypeMap = function () {
        return CourtSystem.attributeTypeMap;
    };
    CourtSystem.discriminator = undefined;
    CourtSystem.attributeTypeMap = [
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
    return CourtSystem;
}());
exports.CourtSystem = CourtSystem;
//# sourceMappingURL=CourtSystem.js.map