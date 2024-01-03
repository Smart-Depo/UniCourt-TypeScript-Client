"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseAttorneys = void 0;
var GetCase200ResponseAttorneys = (function () {
    function GetCase200ResponseAttorneys() {
    }
    GetCase200ResponseAttorneys.getAttributeTypeMap = function () {
        return GetCase200ResponseAttorneys.attributeTypeMap;
    };
    GetCase200ResponseAttorneys.discriminator = undefined;
    GetCase200ResponseAttorneys.attributeTypeMap = [
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
    return GetCase200ResponseAttorneys;
}());
exports.GetCase200ResponseAttorneys = GetCase200ResponseAttorneys;
//# sourceMappingURL=GetCase200ResponseAttorneys.js.map