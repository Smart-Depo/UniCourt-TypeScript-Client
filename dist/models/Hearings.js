"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hearings = void 0;
var Hearings = (function () {
    function Hearings() {
    }
    Hearings.getAttributeTypeMap = function () {
        return Hearings.attributeTypeMap;
    };
    Hearings.discriminator = undefined;
    Hearings.attributeTypeMap = [
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
    return Hearings;
}());
exports.Hearings = Hearings;
//# sourceMappingURL=Hearings.js.map