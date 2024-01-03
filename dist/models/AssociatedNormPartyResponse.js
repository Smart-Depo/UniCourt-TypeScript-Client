"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormPartyResponse = void 0;
var AssociatedNormPartyResponse = (function () {
    function AssociatedNormPartyResponse() {
    }
    AssociatedNormPartyResponse.getAttributeTypeMap = function () {
        return AssociatedNormPartyResponse.attributeTypeMap;
    };
    AssociatedNormPartyResponse.discriminator = undefined;
    AssociatedNormPartyResponse.attributeTypeMap = [
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
    return AssociatedNormPartyResponse;
}());
exports.AssociatedNormPartyResponse = AssociatedNormPartyResponse;
//# sourceMappingURL=AssociatedNormPartyResponse.js.map