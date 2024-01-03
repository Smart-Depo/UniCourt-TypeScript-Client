"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyLawFirm = void 0;
var AttorneyLawFirm = (function () {
    function AttorneyLawFirm() {
    }
    AttorneyLawFirm.getAttributeTypeMap = function () {
        return AttorneyLawFirm.attributeTypeMap;
    };
    AttorneyLawFirm.discriminator = undefined;
    AttorneyLawFirm.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyLawFirmId",
            "baseName": "attorneyLawFirmId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        }
    ];
    return AttorneyLawFirm;
}());
exports.AttorneyLawFirm = AttorneyLawFirm;
//# sourceMappingURL=AttorneyLawFirm.js.map