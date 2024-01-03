"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCausesOfActionGroup200Response = void 0;
var GetCausesOfActionGroup200Response = (function () {
    function GetCausesOfActionGroup200Response() {
    }
    GetCausesOfActionGroup200Response.getAttributeTypeMap = function () {
        return GetCausesOfActionGroup200Response.attributeTypeMap;
    };
    GetCausesOfActionGroup200Response.discriminator = undefined;
    GetCausesOfActionGroup200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionGroupArray",
            "baseName": "causeOfActionGroupArray",
            "type": "Array<CauseOfActionGroup1>",
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
    return GetCausesOfActionGroup200Response;
}());
exports.GetCausesOfActionGroup200Response = GetCausesOfActionGroup200Response;
//# sourceMappingURL=GetCausesOfActionGroup200Response.js.map