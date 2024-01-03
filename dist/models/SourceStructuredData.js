"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceStructuredData = void 0;
var SourceStructuredData = (function () {
    function SourceStructuredData() {
    }
    SourceStructuredData.getAttributeTypeMap = function () {
        return SourceStructuredData.attributeTypeMap;
    };
    SourceStructuredData.discriminator = undefined;
    SourceStructuredData.attributeTypeMap = [
        {
            "name": "rawOrderedDataArray",
            "baseName": "rawOrderedDataArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner>",
            "format": ""
        },
        {
            "name": "extractedFields",
            "baseName": "extractedFields",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields",
            "format": ""
        }
    ];
    return SourceStructuredData;
}());
exports.SourceStructuredData = SourceStructuredData;
//# sourceMappingURL=SourceStructuredData.js.map