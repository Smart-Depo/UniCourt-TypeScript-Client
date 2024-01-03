"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormJudgeResponse = void 0;
var AssociatedNormJudgeResponse = (function () {
    function AssociatedNormJudgeResponse() {
    }
    AssociatedNormJudgeResponse.getAttributeTypeMap = function () {
        return AssociatedNormJudgeResponse.attributeTypeMap;
    };
    AssociatedNormJudgeResponse.discriminator = undefined;
    AssociatedNormJudgeResponse.attributeTypeMap = [
        {
            "name": "associatedNormJudgeArray",
            "baseName": "associatedNormJudgeArray",
            "type": "Array<AssociatedNormJudge1>",
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
    return AssociatedNormJudgeResponse;
}());
exports.AssociatedNormJudgeResponse = AssociatedNormJudgeResponse;
//# sourceMappingURL=AssociatedNormJudgeResponse.js.map