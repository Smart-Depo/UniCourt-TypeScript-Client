"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCausesOfActionAdditionalData200Response = void 0;
var GetCausesOfActionAdditionalData200Response = (function () {
    function GetCausesOfActionAdditionalData200Response() {
    }
    GetCausesOfActionAdditionalData200Response.getAttributeTypeMap = function () {
        return GetCausesOfActionAdditionalData200Response.attributeTypeMap;
    };
    GetCausesOfActionAdditionalData200Response.discriminator = undefined;
    GetCausesOfActionAdditionalData200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionAdditionalDataArray",
            "baseName": "causeOfActionAdditionalDataArray",
            "type": "Array<CauseOfActionAdditionalData1>",
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
    return GetCausesOfActionAdditionalData200Response;
}());
exports.GetCausesOfActionAdditionalData200Response = GetCausesOfActionAdditionalData200Response;
//# sourceMappingURL=GetCausesOfActionAdditionalData200Response.js.map