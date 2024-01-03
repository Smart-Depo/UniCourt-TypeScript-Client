"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeSeverity = void 0;
var ChargeSeverity = (function () {
    function ChargeSeverity() {
    }
    ChargeSeverity.getAttributeTypeMap = function () {
        return ChargeSeverity.attributeTypeMap;
    };
    ChargeSeverity.discriminator = undefined;
    ChargeSeverity.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargeSeverityId",
            "baseName": "chargeSeverityId",
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
    return ChargeSeverity;
}());
exports.ChargeSeverity = ChargeSeverity;
//# sourceMappingURL=ChargeSeverity.js.map