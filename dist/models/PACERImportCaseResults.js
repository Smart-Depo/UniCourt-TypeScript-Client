"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERImportCaseResults = void 0;
var PACERImportCaseResults = (function () {
    function PACERImportCaseResults() {
    }
    PACERImportCaseResults.getAttributeTypeMap = function () {
        return PACERImportCaseResults.attributeTypeMap;
    };
    PACERImportCaseResults.discriminator = undefined;
    PACERImportCaseResults.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasOnlyMetaInfo",
            "baseName": "hasOnlyMetaInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "uniCourtContent",
            "baseName": "uniCourtContent",
            "type": "CaseSearchResult1",
            "format": ""
        }
    ];
    return PACERImportCaseResults;
}());
exports.PACERImportCaseResults = PACERImportCaseResults;
//# sourceMappingURL=PACERImportCaseResults.js.map