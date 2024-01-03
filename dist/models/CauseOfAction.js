"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfAction = void 0;
var CauseOfAction = (function () {
    function CauseOfAction() {
    }
    CauseOfAction.getAttributeTypeMap = function () {
        return CauseOfAction.attributeTypeMap;
    };
    CauseOfAction.discriminator = undefined;
    CauseOfAction.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionId",
            "baseName": "causeOfActionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionGroupId",
            "baseName": "causeOfActionGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "causeOfActionGroup",
            "baseName": "causeOfActionGroup",
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
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return CauseOfAction;
}());
exports.CauseOfAction = CauseOfAction;
//# sourceMappingURL=CauseOfAction.js.map