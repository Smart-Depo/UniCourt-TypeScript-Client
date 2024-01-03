"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurisdictionGeo1 = void 0;
var JurisdictionGeo1 = (function () {
    function JurisdictionGeo1() {
    }
    JurisdictionGeo1.getAttributeTypeMap = function () {
        return JurisdictionGeo1.attributeTypeMap;
    };
    JurisdictionGeo1.discriminator = undefined;
    JurisdictionGeo1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "jurisdictionGeoId",
            "baseName": "jurisdictionGeoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "county",
            "baseName": "county",
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
            "name": "fipsCode",
            "baseName": "fipsCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCodeArray",
            "baseName": "zipCodeArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "courtsForJurisdictionGeoAPI",
            "baseName": "courtsForJurisdictionGeoAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return JurisdictionGeo1;
}());
exports.JurisdictionGeo1 = JurisdictionGeo1;
//# sourceMappingURL=JurisdictionGeo1.js.map