"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentDownload = void 0;
var DocumentDownload = (function () {
    function DocumentDownload() {
    }
    DocumentDownload.getAttributeTypeMap = function () {
        return DocumentDownload.attributeTypeMap;
    };
    DocumentDownload.discriminator = undefined;
    DocumentDownload.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentId",
            "baseName": "caseDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileUrl",
            "baseName": "fileUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentDownloadAPI",
            "baseName": "caseDocumentDownloadAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "Exception1",
            "format": ""
        }
    ];
    return DocumentDownload;
}());
exports.DocumentDownload = DocumentDownload;
//# sourceMappingURL=DocumentDownload.js.map