"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportFile1 = void 0;
var ExportFile1 = (function () {
    function ExportFile1() {
    }
    ExportFile1.getAttributeTypeMap = function () {
        return ExportFile1.attributeTypeMap;
    };
    ExportFile1.discriminator = undefined;
    ExportFile1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fileUrl",
            "baseName": "fileUrl",
            "type": "string",
            "format": ""
        }
    ];
    return ExportFile1;
}());
exports.ExportFile1 = ExportFile1;
//# sourceMappingURL=ExportFile1.js.map