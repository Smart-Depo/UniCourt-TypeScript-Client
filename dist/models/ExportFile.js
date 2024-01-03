"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportFile = void 0;
var ExportFile = (function () {
    function ExportFile() {
    }
    ExportFile.getAttributeTypeMap = function () {
        return ExportFile.attributeTypeMap;
    };
    ExportFile.discriminator = undefined;
    ExportFile.attributeTypeMap = [
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
    return ExportFile;
}());
exports.ExportFile = ExportFile;
//# sourceMappingURL=ExportFile.js.map