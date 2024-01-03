"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyType1 = void 0;
var AttorneyType1 = (function () {
    function AttorneyType1() {
    }
    AttorneyType1.getAttributeTypeMap = function () {
        return AttorneyType1.attributeTypeMap;
    };
    AttorneyType1.discriminator = undefined;
    AttorneyType1.attributeTypeMap = [
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
    return AttorneyType1;
}());
exports.AttorneyType1 = AttorneyType1;
//# sourceMappingURL=AttorneyType1.js.map