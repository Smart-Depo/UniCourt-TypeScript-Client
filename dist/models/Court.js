"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court = void 0;
var Court = (function () {
    function Court() {
    }
    Court.getAttributeTypeMap = function () {
        return Court.attributeTypeMap;
    };
    Court.discriminator = undefined;
    Court.attributeTypeMap = [
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
    return Court;
}());
exports.Court = Court;
//# sourceMappingURL=Court.js.map