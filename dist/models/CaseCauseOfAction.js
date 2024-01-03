"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCauseOfAction = void 0;
var CaseCauseOfAction = (function () {
    function CaseCauseOfAction() {
    }
    CaseCauseOfAction.getAttributeTypeMap = function () {
        return CaseCauseOfAction.attributeTypeMap;
    };
    CaseCauseOfAction.discriminator = undefined;
    CaseCauseOfAction.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfAction",
            "baseName": "causeOfAction",
            "type": "CauseOfAction1",
            "format": ""
        },
        {
            "name": "causeOfActionAdditionalDataArray",
            "baseName": "causeOfActionAdditionalDataArray",
            "type": "Array<CauseOfActionAdditionalData1>",
            "format": ""
        }
    ];
    return CaseCauseOfAction;
}());
exports.CaseCauseOfAction = CaseCauseOfAction;
//# sourceMappingURL=CaseCauseOfAction.js.map