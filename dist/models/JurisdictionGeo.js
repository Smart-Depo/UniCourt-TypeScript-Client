"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurisdictionGeo = void 0;
var JurisdictionGeo = (function () {
    function JurisdictionGeo() {
    }
    JurisdictionGeo.getAttributeTypeMap = function () {
        return JurisdictionGeo.attributeTypeMap;
    };
    JurisdictionGeo.discriminator = undefined;
    JurisdictionGeo.attributeTypeMap = [
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
    return JurisdictionGeo;
}());
exports.JurisdictionGeo = JurisdictionGeo;
//# sourceMappingURL=JurisdictionGeo.js.map