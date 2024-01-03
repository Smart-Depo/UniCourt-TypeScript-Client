"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hearing = void 0;
var Hearing = (function () {
    function Hearing() {
    }
    Hearing.getAttributeTypeMap = function () {
        return Hearing.attributeTypeMap;
    };
    Hearing.discriminator = undefined;
    Hearing.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "hearingDate",
            "baseName": "hearingDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "hearingDescription",
            "baseName": "hearingDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "hearingStructured",
            "baseName": "hearingStructured",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceData",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
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
    return Hearing;
}());
exports.Hearing = Hearing;
//# sourceMappingURL=Hearing.js.map