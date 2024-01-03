"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurisdictionGeoResponse = void 0;
var JurisdictionGeoResponse = (function () {
    function JurisdictionGeoResponse() {
    }
    JurisdictionGeoResponse.getAttributeTypeMap = function () {
        return JurisdictionGeoResponse.attributeTypeMap;
    };
    JurisdictionGeoResponse.discriminator = undefined;
    JurisdictionGeoResponse.attributeTypeMap = [
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
    return JurisdictionGeoResponse;
}());
exports.JurisdictionGeoResponse = JurisdictionGeoResponse;
//# sourceMappingURL=JurisdictionGeoResponse.js.map