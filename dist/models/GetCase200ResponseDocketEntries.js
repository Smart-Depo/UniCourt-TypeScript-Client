"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseDocketEntries = void 0;
var GetCase200ResponseDocketEntries = (function () {
    function GetCase200ResponseDocketEntries() {
    }
    GetCase200ResponseDocketEntries.getAttributeTypeMap = function () {
        return GetCase200ResponseDocketEntries.attributeTypeMap;
    };
    GetCase200ResponseDocketEntries.discriminator = undefined;
    GetCase200ResponseDocketEntries.attributeTypeMap = [
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
    return GetCase200ResponseDocketEntries;
}());
exports.GetCase200ResponseDocketEntries = GetCase200ResponseDocketEntries;
//# sourceMappingURL=GetCase200ResponseDocketEntries.js.map