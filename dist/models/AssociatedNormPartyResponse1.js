"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormPartyResponse1 = void 0;
var AssociatedNormPartyResponse1 = (function () {
    function AssociatedNormPartyResponse1() {
    }
    AssociatedNormPartyResponse1.getAttributeTypeMap = function () {
        return AssociatedNormPartyResponse1.attributeTypeMap;
    };
    AssociatedNormPartyResponse1.discriminator = undefined;
    AssociatedNormPartyResponse1.attributeTypeMap = [
        {
            "name": "associatedNormPartyArray",
            "baseName": "associatedNormPartyArray",
            "type": "Array<AssociatedNormParty1>",
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
    return AssociatedNormPartyResponse1;
}());
exports.AssociatedNormPartyResponse1 = AssociatedNormPartyResponse1;
//# sourceMappingURL=AssociatedNormPartyResponse1.js.map