"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocketEntries = void 0;
var DocketEntries = (function () {
    function DocketEntries() {
    }
    DocketEntries.getAttributeTypeMap = function () {
        return DocketEntries.attributeTypeMap;
    };
    DocketEntries.discriminator = undefined;
    DocketEntries.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "docketEntryArray",
            "baseName": "docketEntryArray",
            "type": "Array<GetCase200ResponseDocketEntriesDocketEntryArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
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
    return DocketEntries;
}());
exports.DocketEntries = DocketEntries;
//# sourceMappingURL=DocketEntries.js.map