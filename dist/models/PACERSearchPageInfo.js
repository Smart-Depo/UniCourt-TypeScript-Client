"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERSearchPageInfo = void 0;
var PACERSearchPageInfo = (function () {
    function PACERSearchPageInfo() {
    }
    PACERSearchPageInfo.getAttributeTypeMap = function () {
        return PACERSearchPageInfo.attributeTypeMap;
    };
    PACERSearchPageInfo.discriminator = undefined;
    PACERSearchPageInfo.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalElements",
            "baseName": "totalElements",
            "type": "number",
            "format": ""
        },
        {
            "name": "numberOfElements",
            "baseName": "numberOfElements",
            "type": "number",
            "format": ""
        },
        {
            "name": "first",
            "baseName": "first",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "boolean",
            "format": ""
        }
    ];
    return PACERSearchPageInfo;
}());
exports.PACERSearchPageInfo = PACERSearchPageInfo;
//# sourceMappingURL=PACERSearchPageInfo.js.map