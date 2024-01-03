"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormCorporateGroup = void 0;
var NormCorporateGroup = (function () {
    function NormCorporateGroup() {
    }
    NormCorporateGroup.getAttributeTypeMap = function () {
        return NormCorporateGroup.attributeTypeMap;
    };
    NormCorporateGroup.discriminator = undefined;
    NormCorporateGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normCorporateGroupId",
            "baseName": "normCorporateGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normCorporateGroupName",
            "baseName": "normCorporateGroupName",
            "type": "string",
            "format": ""
        }
    ];
    return NormCorporateGroup;
}());
exports.NormCorporateGroup = NormCorporateGroup;
//# sourceMappingURL=NormCorporateGroup.js.map