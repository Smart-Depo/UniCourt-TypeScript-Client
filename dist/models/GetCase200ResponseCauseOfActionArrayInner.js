"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseCauseOfActionArrayInner = void 0;
var GetCase200ResponseCauseOfActionArrayInner = (function () {
    function GetCase200ResponseCauseOfActionArrayInner() {
    }
    GetCase200ResponseCauseOfActionArrayInner.getAttributeTypeMap = function () {
        return GetCase200ResponseCauseOfActionArrayInner.attributeTypeMap;
    };
    GetCase200ResponseCauseOfActionArrayInner.discriminator = undefined;
    GetCase200ResponseCauseOfActionArrayInner.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfAction",
            "baseName": "causeOfAction",
            "type": "CauseOfAction1",
            "format": ""
        },
        {
            "name": "causeOfActionAdditionalDataArray",
            "baseName": "causeOfActionAdditionalDataArray",
            "type": "Array<CauseOfActionAdditionalData1>",
            "format": ""
        }
    ];
    return GetCase200ResponseCauseOfActionArrayInner;
}());
exports.GetCase200ResponseCauseOfActionArrayInner = GetCase200ResponseCauseOfActionArrayInner;
//# sourceMappingURL=GetCase200ResponseCauseOfActionArrayInner.js.map