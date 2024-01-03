"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyRepresentationTypeResponse = void 0;
var AttorneyRepresentationTypeResponse = (function () {
    function AttorneyRepresentationTypeResponse() {
    }
    AttorneyRepresentationTypeResponse.getAttributeTypeMap = function () {
        return AttorneyRepresentationTypeResponse.attributeTypeMap;
    };
    AttorneyRepresentationTypeResponse.discriminator = undefined;
    AttorneyRepresentationTypeResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyRepresentationTypeArray",
            "baseName": "attorneyRepresentationTypeArray",
            "type": "Array<AttorneyRepresentationType1>",
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
    return AttorneyRepresentationTypeResponse;
}());
exports.AttorneyRepresentationTypeResponse = AttorneyRepresentationTypeResponse;
//# sourceMappingURL=AttorneyRepresentationTypeResponse.js.map