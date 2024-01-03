"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseHearingsHearingArrayInner = void 0;
var GetCase200ResponseHearingsHearingArrayInner = (function () {
    function GetCase200ResponseHearingsHearingArrayInner() {
    }
    GetCase200ResponseHearingsHearingArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseHearingsHearingArrayInner.attributeTypeMap;
    };
    GetCase200ResponseHearingsHearingArrayInner.discriminator = undefined;
    GetCase200ResponseHearingsHearingArrayInner.attributeTypeMap = [
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
    return GetCase200ResponseHearingsHearingArrayInner;
}());
exports.GetCase200ResponseHearingsHearingArrayInner = GetCase200ResponseHearingsHearingArrayInner;
//# sourceMappingURL=GetCase200ResponseHearingsHearingArrayInner.js.map