"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtLocation1 = void 0;
var CourtLocation1 = (function () {
    function CourtLocation1() {
    }
    CourtLocation1.getAttributeTypeMap = function () {
        return CourtLocation1.attributeTypeMap;
    };
    CourtLocation1.discriminator = undefined;
    CourtLocation1.attributeTypeMap = [
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
    return CourtLocation1;
}());
exports.CourtLocation1 = CourtLocation1;
//# sourceMappingURL=CourtLocation1.js.map