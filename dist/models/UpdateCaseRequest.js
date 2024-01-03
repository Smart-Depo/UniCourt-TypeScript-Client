"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseRequest = void 0;
var UpdateCaseRequest = (function () {
    function UpdateCaseRequest() {
    }
    UpdateCaseRequest.getAttributeTypeMap = function () {
        return UpdateCaseRequest.attributeTypeMap;
    };
    UpdateCaseRequest.discriminator = undefined;
    UpdateCaseRequest.attributeTypeMap = [
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
    return UpdateCaseRequest;
}());
exports.UpdateCaseRequest = UpdateCaseRequest;
//# sourceMappingURL=UpdateCaseRequest.js.map