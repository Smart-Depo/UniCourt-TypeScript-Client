"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CauseOfActionGroup = void 0;
var CauseOfActionGroup = (function () {
    function CauseOfActionGroup() {
    }
    CauseOfActionGroup.getAttributeTypeMap = function () {
        return CauseOfActionGroup.attributeTypeMap;
    };
    CauseOfActionGroup.discriminator = undefined;
    CauseOfActionGroup.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
    return CauseOfActionGroup;
}());
exports.CauseOfActionGroup = CauseOfActionGroup;
//# sourceMappingURL=CauseOfActionGroup.js.map