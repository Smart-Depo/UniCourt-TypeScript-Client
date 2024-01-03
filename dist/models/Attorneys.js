"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attorneys = void 0;
var Attorneys = (function () {
    function Attorneys() {
    }
    Attorneys.getAttributeTypeMap = function () {
        return Attorneys.attributeTypeMap;
    };
    Attorneys.discriminator = undefined;
    Attorneys.attributeTypeMap = [
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
            "name": "attorneyArray",
            "baseName": "attorneyArray",
            "type": "Array<GetCase200ResponseAttorneysAttorneyArrayInner>",
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
    return Attorneys;
}());
exports.Attorneys = Attorneys;
//# sourceMappingURL=Attorneys.js.map