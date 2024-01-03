"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewDocument = void 0;
var PreviewDocument = (function () {
    function PreviewDocument() {
    }
    PreviewDocument.getAttributeTypeMap = function () {
        return PreviewDocument.attributeTypeMap;
    };
    PreviewDocument.discriminator = undefined;
    PreviewDocument.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "inLibrary",
            "baseName": "inLibrary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addedToLibraryDate",
            "baseName": "addedToLibraryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadAPI",
            "baseName": "downloadAPI",
            "type": "string",
            "format": ""
        }
    ];
    return PreviewDocument;
}());
exports.PreviewDocument = PreviewDocument;
//# sourceMappingURL=PreviewDocument.js.map