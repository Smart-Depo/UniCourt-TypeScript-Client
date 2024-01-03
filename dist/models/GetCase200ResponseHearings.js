"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseHearings = void 0;
var GetCase200ResponseHearings = (function () {
    function GetCase200ResponseHearings() {
    }
    GetCase200ResponseHearings.getAttributeTypeMap = function () {
        return GetCase200ResponseHearings.attributeTypeMap;
    };
    GetCase200ResponseHearings.discriminator = undefined;
    GetCase200ResponseHearings.attributeTypeMap = [
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
            "name": "hearingArray",
            "baseName": "hearingArray",
            "type": "Array<GetCase200ResponseHearingsHearingArrayInner>",
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
    return GetCase200ResponseHearings;
}());
exports.GetCase200ResponseHearings = GetCase200ResponseHearings;
//# sourceMappingURL=GetCase200ResponseHearings.js.map