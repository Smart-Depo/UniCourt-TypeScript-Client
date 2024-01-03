"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawOrderedData = void 0;
var RawOrderedData = (function () {
    function RawOrderedData() {
    }
    RawOrderedData.getAttributeTypeMap = function () {
        return RawOrderedData.attributeTypeMap;
    };
    RawOrderedData.discriminator = undefined;
    RawOrderedData.attributeTypeMap = [
        {
            "name": "childArray",
            "baseName": "childArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner>",
            "format": ""
        },
        {
            "name": "lbl",
            "baseName": "lbl",
            "type": "string",
            "format": ""
        },
        {
            "name": "ord",
            "baseName": "ord",
            "type": "number",
            "format": ""
        },
        {
            "name": "val",
            "baseName": "val",
            "type": "string",
            "format": ""
        }
    ];
    return RawOrderedData;
}());
exports.RawOrderedData = RawOrderedData;
//# sourceMappingURL=RawOrderedData.js.map