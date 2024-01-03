"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcePageData = void 0;
var SourcePageData = (function () {
    function SourcePageData() {
    }
    SourcePageData.getAttributeTypeMap = function () {
        return SourcePageData.attributeTypeMap;
    };
    SourcePageData.discriminator = undefined;
    SourcePageData.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalSourceData",
            "baseName": "additionalSourceData",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        }
    ];
    return SourcePageData;
}());
exports.SourcePageData = SourcePageData;
//# sourceMappingURL=SourcePageData.js.map