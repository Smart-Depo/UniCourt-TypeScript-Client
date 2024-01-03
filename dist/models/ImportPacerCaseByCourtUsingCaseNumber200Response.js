"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportPacerCaseByCourtUsingCaseNumber200Response = void 0;
var ImportPacerCaseByCourtUsingCaseNumber200Response = (function () {
    function ImportPacerCaseByCourtUsingCaseNumber200Response() {
    }
    ImportPacerCaseByCourtUsingCaseNumber200Response.getAttributeTypeMap = function () {
        return ImportPacerCaseByCourtUsingCaseNumber200Response.attributeTypeMap;
    };
    ImportPacerCaseByCourtUsingCaseNumber200Response.discriminator = undefined;
    ImportPacerCaseByCourtUsingCaseNumber200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtFee",
            "baseName": "courtFee",
            "type": "number",
            "format": ""
        },
        {
            "name": "pacerImportCaseResultsArray",
            "baseName": "pacerImportCaseResultsArray",
            "type": "Array<ImportPacerCaseByCourtUsingCaseNumber200ResponsePacerImportCaseResultsArrayInner>",
            "format": ""
        }
    ];
    return ImportPacerCaseByCourtUsingCaseNumber200Response;
}());
exports.ImportPacerCaseByCourtUsingCaseNumber200Response = ImportPacerCaseByCourtUsingCaseNumber200Response;
//# sourceMappingURL=ImportPacerCaseByCourtUsingCaseNumber200Response.js.map