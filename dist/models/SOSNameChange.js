"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSNameChange = void 0;
var SOSNameChange = (function () {
    function SOSNameChange() {
    }
    SOSNameChange.getAttributeTypeMap = function () {
        return SOSNameChange.attributeTypeMap;
    };
    SOSNameChange.discriminator = undefined;
    SOSNameChange.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "fromDate",
            "baseName": "fromDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "toDate",
            "baseName": "toDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return SOSNameChange;
}());
exports.SOSNameChange = SOSNameChange;
//# sourceMappingURL=SOSNameChange.js.map