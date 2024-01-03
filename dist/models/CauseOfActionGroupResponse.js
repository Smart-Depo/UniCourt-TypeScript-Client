"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfActionGroupResponse = void 0;
var CauseOfActionGroupResponse = (function () {
    function CauseOfActionGroupResponse() {
    }
    CauseOfActionGroupResponse.getAttributeTypeMap = function () {
        return CauseOfActionGroupResponse.attributeTypeMap;
    };
    CauseOfActionGroupResponse.discriminator = undefined;
    CauseOfActionGroupResponse.attributeTypeMap = [
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
    return CauseOfActionGroupResponse;
}());
exports.CauseOfActionGroupResponse = CauseOfActionGroupResponse;
//# sourceMappingURL=CauseOfActionGroupResponse.js.map