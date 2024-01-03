"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyType = void 0;
var AttorneyType = (function () {
    function AttorneyType() {
    }
    AttorneyType.getAttributeTypeMap = function () {
        return AttorneyType.attributeTypeMap;
    };
    AttorneyType.discriminator = undefined;
    AttorneyType.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyTypeId",
            "baseName": "attorneyTypeId",
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
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return AttorneyType;
}());
exports.AttorneyType = AttorneyType;
//# sourceMappingURL=AttorneyType.js.map