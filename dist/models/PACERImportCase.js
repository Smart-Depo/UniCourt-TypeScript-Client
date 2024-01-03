"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERImportCase = void 0;
var PACERImportCase = (function () {
    function PACERImportCase() {
    }
    PACERImportCase.getAttributeTypeMap = function () {
        return PACERImportCase.attributeTypeMap;
    };
    PACERImportCase.discriminator = undefined;
    PACERImportCase.attributeTypeMap = [
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
    return PACERImportCase;
}());
exports.PACERImportCase = PACERImportCase;
//# sourceMappingURL=PACERImportCase.js.map