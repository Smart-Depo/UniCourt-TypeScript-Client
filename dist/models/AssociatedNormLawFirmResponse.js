"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormLawFirmResponse = void 0;
var AssociatedNormLawFirmResponse = (function () {
    function AssociatedNormLawFirmResponse() {
    }
    AssociatedNormLawFirmResponse.getAttributeTypeMap = function () {
        return AssociatedNormLawFirmResponse.attributeTypeMap;
    };
    AssociatedNormLawFirmResponse.discriminator = undefined;
    AssociatedNormLawFirmResponse.attributeTypeMap = [
        {
            "name": "associatedNormLawFirmArray",
            "baseName": "associatedNormLawFirmArray",
            "type": "Array<AssociatedNormLawFirm1>",
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
    return AssociatedNormLawFirmResponse;
}());
exports.AssociatedNormLawFirmResponse = AssociatedNormLawFirmResponse;
//# sourceMappingURL=AssociatedNormLawFirmResponse.js.map