"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormJudgeResponse1 = void 0;
var AssociatedNormJudgeResponse1 = (function () {
    function AssociatedNormJudgeResponse1() {
    }
    AssociatedNormJudgeResponse1.getAttributeTypeMap = function () {
        return AssociatedNormJudgeResponse1.attributeTypeMap;
    };
    AssociatedNormJudgeResponse1.discriminator = undefined;
    AssociatedNormJudgeResponse1.attributeTypeMap = [
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
    return AssociatedNormJudgeResponse1;
}());
exports.AssociatedNormJudgeResponse1 = AssociatedNormJudgeResponse1;
//# sourceMappingURL=AssociatedNormJudgeResponse1.js.map