"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateRequest = void 0;
var CaseUpdateRequest = (function () {
    function CaseUpdateRequest() {
    }
    CaseUpdateRequest.getAttributeTypeMap = function () {
        return CaseUpdateRequest.attributeTypeMap;
    };
    CaseUpdateRequest.discriminator = undefined;
    CaseUpdateRequest.attributeTypeMap = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerOptions",
            "baseName": "pacerOptions",
            "type": "UpdateCaseRequestPacerOptions",
            "format": ""
        }
    ];
    return CaseUpdateRequest;
}());
exports.CaseUpdateRequest = CaseUpdateRequest;
//# sourceMappingURL=CaseUpdateRequest.js.map