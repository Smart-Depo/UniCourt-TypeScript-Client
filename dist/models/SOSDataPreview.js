"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSDataPreview = void 0;
var SOSDataPreview = (function () {
    function SOSDataPreview() {
    }
    SOSDataPreview.getAttributeTypeMap = function () {
        return SOSDataPreview.attributeTypeMap;
    };
    SOSDataPreview.discriminator = undefined;
    SOSDataPreview.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "sosNumber",
            "baseName": "sosNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateCode",
            "baseName": "stateCode",
            "type": "string",
            "format": ""
        }
    ];
    return SOSDataPreview;
}());
exports.SOSDataPreview = SOSDataPreview;
//# sourceMappingURL=SOSDataPreview.js.map