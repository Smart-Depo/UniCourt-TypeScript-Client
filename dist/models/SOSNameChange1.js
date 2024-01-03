"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSNameChange1 = void 0;
var SOSNameChange1 = (function () {
    function SOSNameChange1() {
    }
    SOSNameChange1.getAttributeTypeMap = function () {
        return SOSNameChange1.attributeTypeMap;
    };
    SOSNameChange1.discriminator = undefined;
    SOSNameChange1.attributeTypeMap = [
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
    return SOSNameChange1;
}());
exports.SOSNameChange1 = SOSNameChange1;
//# sourceMappingURL=SOSNameChange1.js.map