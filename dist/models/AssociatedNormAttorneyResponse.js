"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormAttorneyResponse = void 0;
var AssociatedNormAttorneyResponse = (function () {
    function AssociatedNormAttorneyResponse() {
    }
    AssociatedNormAttorneyResponse.getAttributeTypeMap = function () {
        return AssociatedNormAttorneyResponse.attributeTypeMap;
    };
    AssociatedNormAttorneyResponse.discriminator = undefined;
    AssociatedNormAttorneyResponse.attributeTypeMap = [
        {
            "name": "associatedNormAttorneyArray",
            "baseName": "associatedNormAttorneyArray",
            "type": "Array<AssociatedNormAttorney1>",
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
    return AssociatedNormAttorneyResponse;
}());
exports.AssociatedNormAttorneyResponse = AssociatedNormAttorneyResponse;
//# sourceMappingURL=AssociatedNormAttorneyResponse.js.map