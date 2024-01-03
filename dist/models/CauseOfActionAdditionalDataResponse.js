"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfActionAdditionalDataResponse = void 0;
var CauseOfActionAdditionalDataResponse = (function () {
    function CauseOfActionAdditionalDataResponse() {
    }
    CauseOfActionAdditionalDataResponse.getAttributeTypeMap = function () {
        return CauseOfActionAdditionalDataResponse.attributeTypeMap;
    };
    CauseOfActionAdditionalDataResponse.discriminator = undefined;
    CauseOfActionAdditionalDataResponse.attributeTypeMap = [
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
    return CauseOfActionAdditionalDataResponse;
}());
exports.CauseOfActionAdditionalDataResponse = CauseOfActionAdditionalDataResponse;
//# sourceMappingURL=CauseOfActionAdditionalDataResponse.js.map