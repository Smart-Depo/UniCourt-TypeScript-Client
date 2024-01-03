"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurisdictionGeoResponse1 = void 0;
var JurisdictionGeoResponse1 = (function () {
    function JurisdictionGeoResponse1() {
    }
    JurisdictionGeoResponse1.getAttributeTypeMap = function () {
        return JurisdictionGeoResponse1.attributeTypeMap;
    };
    JurisdictionGeoResponse1.discriminator = undefined;
    JurisdictionGeoResponse1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "jurisdictionGeoArray",
            "baseName": "jurisdictionGeoArray",
            "type": "Array<JurisdictionGeo1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }
    ];
    return JurisdictionGeoResponse1;
}());
exports.JurisdictionGeoResponse1 = JurisdictionGeoResponse1;
//# sourceMappingURL=JurisdictionGeoResponse1.js.map