"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtLocation = void 0;
var CourtLocation = (function () {
    function CourtLocation() {
    }
    CourtLocation.getAttributeTypeMap = function () {
        return CourtLocation.attributeTypeMap;
    };
    CourtLocation.discriminator = undefined;
    CourtLocation.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtLocationId",
            "baseName": "courtLocationId",
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
            "name": "streetAddress1",
            "baseName": "streetAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress2",
            "baseName": "streetAddress2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "stateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "courtsForCourtLocationAPI",
            "baseName": "courtsForCourtLocationAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "courtServiceStatusAPI",
            "baseName": "courtServiceStatusAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return CourtLocation;
}());
exports.CourtLocation = CourtLocation;
//# sourceMappingURL=CourtLocation.js.map