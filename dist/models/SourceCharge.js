"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCharge = void 0;
var SourceCharge = (function () {
    function SourceCharge() {
    }
    SourceCharge.getAttributeTypeMap = function () {
        return SourceCharge.attributeTypeMap;
    };
    SourceCharge.discriminator = undefined;
    SourceCharge.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeRaw",
            "baseName": "sourceChargeRaw",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCharge",
            "baseName": "sourceCharge",
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
            "name": "sourceStatute",
            "baseName": "sourceStatute",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeDegree",
            "baseName": "sourceChargeDegree",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeSeverity",
            "baseName": "sourceChargeSeverity",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceChargeAdditionalDataArray",
            "baseName": "sourceChargeAdditionalDataArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourceChargeArrayInnerSourceChargeAdditionalDataArrayInner>",
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
    return SourceCharge;
}());
exports.SourceCharge = SourceCharge;
//# sourceMappingURL=SourceCharge.js.map