"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCausesOfAction200Response = void 0;
var GetCausesOfAction200Response = (function () {
    function GetCausesOfAction200Response() {
    }
    GetCausesOfAction200Response.getAttributeTypeMap = function () {
        return GetCausesOfAction200Response.attributeTypeMap;
    };
    GetCausesOfAction200Response.discriminator = undefined;
    GetCausesOfAction200Response.attributeTypeMap = [
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
    return GetCausesOfAction200Response;
}());
exports.GetCausesOfAction200Response = GetCausesOfAction200Response;
//# sourceMappingURL=GetCausesOfAction200Response.js.map