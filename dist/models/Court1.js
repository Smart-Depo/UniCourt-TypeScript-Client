"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court1 = void 0;
var Court1 = (function () {
    function Court1() {
    }
    Court1.getAttributeTypeMap = function () {
        return Court1.attributeTypeMap;
    };
    Court1.discriminator = undefined;
    Court1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtId",
            "baseName": "courtId",
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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
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
            "name": "nameAka",
            "baseName": "nameAka",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalLevels",
            "baseName": "additionalLevels",
            "type": "AdditionalLevels1",
            "format": ""
        },
        {
            "name": "containerType",
            "baseName": "containerType",
            "type": "string",
            "format": ""
        },
        {
            "name": "container",
            "baseName": "container",
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
            "name": "jurisdictionGeoForCourtAPI",
            "baseName": "jurisdictionGeoForCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "courtLocationsForCourtAPI",
            "baseName": "courtLocationsForCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "appealCourtsForCourtAPI",
            "baseName": "appealCourtsForCourtAPI",
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
    return Court1;
}());
exports.Court1 = Court1;
//# sourceMappingURL=Court1.js.map