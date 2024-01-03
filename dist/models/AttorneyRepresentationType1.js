"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyRepresentationType1 = void 0;
var AttorneyRepresentationType1 = (function () {
    function AttorneyRepresentationType1() {
    }
    AttorneyRepresentationType1.getAttributeTypeMap = function () {
        return AttorneyRepresentationType1.attributeTypeMap;
    };
    AttorneyRepresentationType1.discriminator = undefined;
    AttorneyRepresentationType1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyRepresentationTypeId",
            "baseName": "attorneyRepresentationTypeId",
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
    return AttorneyRepresentationType1;
}());
exports.AttorneyRepresentationType1 = AttorneyRepresentationType1;
//# sourceMappingURL=AttorneyRepresentationType1.js.map