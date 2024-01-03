"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormLawFirmResponse1 = void 0;
var AssociatedNormLawFirmResponse1 = (function () {
    function AssociatedNormLawFirmResponse1() {
    }
    AssociatedNormLawFirmResponse1.getAttributeTypeMap = function () {
        return AssociatedNormLawFirmResponse1.attributeTypeMap;
    };
    AssociatedNormLawFirmResponse1.discriminator = undefined;
    AssociatedNormLawFirmResponse1.attributeTypeMap = [
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
    return AssociatedNormLawFirmResponse1;
}());
exports.AssociatedNormLawFirmResponse1 = AssociatedNormLawFirmResponse1;
//# sourceMappingURL=AssociatedNormLawFirmResponse1.js.map