"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfActionResponse = void 0;
var CauseOfActionResponse = (function () {
    function CauseOfActionResponse() {
    }
    CauseOfActionResponse.getAttributeTypeMap = function () {
        return CauseOfActionResponse.attributeTypeMap;
    };
    CauseOfActionResponse.discriminator = undefined;
    CauseOfActionResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionArray",
            "baseName": "causeOfActionArray",
            "type": "Array<CauseOfAction1>",
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
    return CauseOfActionResponse;
}());
exports.CauseOfActionResponse = CauseOfActionResponse;
//# sourceMappingURL=CauseOfActionResponse.js.map