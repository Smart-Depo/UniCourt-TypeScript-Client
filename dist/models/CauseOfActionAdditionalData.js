"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfActionAdditionalData = void 0;
var CauseOfActionAdditionalData = (function () {
    function CauseOfActionAdditionalData() {
    }
    CauseOfActionAdditionalData.getAttributeTypeMap = function () {
        return CauseOfActionAdditionalData.attributeTypeMap;
    };
    CauseOfActionAdditionalData.discriminator = undefined;
    CauseOfActionAdditionalData.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionAdditionalDataId",
            "baseName": "causeOfActionAdditionalDataId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
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
    return CauseOfActionAdditionalData;
}());
exports.CauseOfActionAdditionalData = CauseOfActionAdditionalData;
//# sourceMappingURL=CauseOfActionAdditionalData.js.map