"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalLevels = void 0;
var AdditionalLevels = (function () {
    function AdditionalLevels() {
    }
    AdditionalLevels.getAttributeTypeMap = function () {
        return AdditionalLevels.attributeTypeMap;
    };
    AdditionalLevels.discriminator = undefined;
    AdditionalLevels.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "level1",
            "baseName": "level1",
            "type": "string",
            "format": ""
        },
        {
            "name": "level2",
            "baseName": "level2",
            "type": "string",
            "format": ""
        },
        {
            "name": "level3",
            "baseName": "level3",
            "type": "string",
            "format": ""
        },
        {
            "name": "level4",
            "baseName": "level4",
            "type": "string",
            "format": ""
        }
    ];
    return AdditionalLevels;
}());
exports.AdditionalLevels = AdditionalLevels;
//# sourceMappingURL=AdditionalLevels.js.map