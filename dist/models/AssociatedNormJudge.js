"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormJudge = void 0;
var AssociatedNormJudge = (function () {
    function AssociatedNormJudge() {
    }
    AssociatedNormJudge.getAttributeTypeMap = function () {
        return AssociatedNormJudge.attributeTypeMap;
    };
    AssociatedNormJudge.discriminator = undefined;
    AssociatedNormJudge.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeId",
            "baseName": "normJudgeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normJudgeAPI",
            "baseName": "normJudgeAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseTimeline",
            "baseName": "caseTimeline",
            "type": "CaseTimeline1",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }
    ];
    return AssociatedNormJudge;
}());
exports.AssociatedNormJudge = AssociatedNormJudge;
//# sourceMappingURL=AssociatedNormJudge.js.map