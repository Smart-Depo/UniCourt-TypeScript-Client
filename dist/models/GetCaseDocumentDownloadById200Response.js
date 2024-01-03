"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseDocumentDownloadById200Response = void 0;
var GetCaseDocumentDownloadById200Response = (function () {
    function GetCaseDocumentDownloadById200Response() {
    }
    GetCaseDocumentDownloadById200Response.getAttributeTypeMap = function () {
        return GetCaseDocumentDownloadById200Response.attributeTypeMap;
    };
    GetCaseDocumentDownloadById200Response.discriminator = undefined;
    GetCaseDocumentDownloadById200Response.attributeTypeMap = [
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
    return GetCaseDocumentDownloadById200Response;
}());
exports.GetCaseDocumentDownloadById200Response = GetCaseDocumentDownloadById200Response;
//# sourceMappingURL=GetCaseDocumentDownloadById200Response.js.map