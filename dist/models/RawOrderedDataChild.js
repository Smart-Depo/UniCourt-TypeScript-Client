"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawOrderedDataChild = void 0;
var RawOrderedDataChild = (function () {
    function RawOrderedDataChild() {
    }
    RawOrderedDataChild.getAttributeTypeMap = function () {
        return RawOrderedDataChild.attributeTypeMap;
    };
    RawOrderedDataChild.discriminator = undefined;
    RawOrderedDataChild.attributeTypeMap = [
        {
            "name": "childArray",
            "baseName": "childArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner>",
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
    return RawOrderedDataChild;
}());
exports.RawOrderedDataChild = RawOrderedDataChild;
//# sourceMappingURL=RawOrderedDataChild.js.map