"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormAttorneyResponse1 = void 0;
var AssociatedNormAttorneyResponse1 = (function () {
    function AssociatedNormAttorneyResponse1() {
    }
    AssociatedNormAttorneyResponse1.getAttributeTypeMap = function () {
        return AssociatedNormAttorneyResponse1.attributeTypeMap;
    };
    AssociatedNormAttorneyResponse1.discriminator = undefined;
    AssociatedNormAttorneyResponse1.attributeTypeMap = [
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
    return AssociatedNormAttorneyResponse1;
}());
exports.AssociatedNormAttorneyResponse1 = AssociatedNormAttorneyResponse1;
//# sourceMappingURL=AssociatedNormAttorneyResponse1.js.map