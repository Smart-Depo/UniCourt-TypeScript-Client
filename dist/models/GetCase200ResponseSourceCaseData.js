"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseSourceCaseData = void 0;
var GetCase200ResponseSourceCaseData = (function () {
    function GetCase200ResponseSourceCaseData() {
    }
    GetCase200ResponseSourceCaseData.getAttributeTypeMap = function () {
        return GetCase200ResponseSourceCaseData.attributeTypeMap;
    };
    GetCase200ResponseSourceCaseData.discriminator = undefined;
    GetCase200ResponseSourceCaseData.attributeTypeMap = [
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
    return GetCase200ResponseSourceCaseData;
}());
exports.GetCase200ResponseSourceCaseData = GetCase200ResponseSourceCaseData;
//# sourceMappingURL=GetCase200ResponseSourceCaseData.js.map