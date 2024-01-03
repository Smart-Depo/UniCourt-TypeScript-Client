"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyRepresentationType = void 0;
var AttorneyRepresentationType = (function () {
    function AttorneyRepresentationType() {
    }
    AttorneyRepresentationType.getAttributeTypeMap = function () {
        return AttorneyRepresentationType.attributeTypeMap;
    };
    AttorneyRepresentationType.discriminator = undefined;
    AttorneyRepresentationType.attributeTypeMap = [
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
    return AttorneyRepresentationType;
}());
exports.AttorneyRepresentationType = AttorneyRepresentationType;
//# sourceMappingURL=AttorneyRepresentationType.js.map