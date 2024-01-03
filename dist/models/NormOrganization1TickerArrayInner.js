"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormOrganization1TickerArrayInner = void 0;
var NormOrganization1TickerArrayInner = (function () {
    function NormOrganization1TickerArrayInner() {
    }
    NormOrganization1TickerArrayInner.getAttributeTypeMap = function () {
        return NormOrganization1TickerArrayInner.attributeTypeMap;
    };
    NormOrganization1TickerArrayInner.discriminator = undefined;
    NormOrganization1TickerArrayInner.attributeTypeMap = [
        {
            "name": "exchange",
            "baseName": "exchange",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbols",
            "baseName": "symbols",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return NormOrganization1TickerArrayInner;
}());
exports.NormOrganization1TickerArrayInner = NormOrganization1TickerArrayInner;
//# sourceMappingURL=NormOrganization1TickerArrayInner.js.map