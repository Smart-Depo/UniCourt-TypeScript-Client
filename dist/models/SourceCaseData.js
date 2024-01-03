"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCaseData = void 0;
var SourceCaseData = (function () {
    function SourceCaseData() {
    }
    SourceCaseData.getAttributeTypeMap = function () {
        return SourceCaseData.attributeTypeMap;
    };
    SourceCaseData.discriminator = undefined;
    SourceCaseData.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCourt",
            "baseName": "sourceCourt",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCaseType",
            "baseName": "sourceCaseType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeArray",
            "baseName": "sourceChargeArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInner>",
            "format": ""
        },
        {
            "name": "natureOfSuitArray",
            "baseName": "natureOfSuitArray",
            "type": "Array<GetCase200ResponseSourceCaseDataNatureOfSuitArrayInner>",
            "format": ""
        },
        {
            "name": "sourceCauseOfActionArray",
            "baseName": "sourceCauseOfActionArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourceCauseOfActionArrayInner>",
            "format": ""
        },
        {
            "name": "sourceCaseStatus",
            "baseName": "sourceCaseStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourcePageData",
            "baseName": "sourcePageData",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInner>",
            "format": ""
        }
    ];
    return SourceCaseData;
}());
exports.SourceCaseData = SourceCaseData;
//# sourceMappingURL=SourceCaseData.js.map