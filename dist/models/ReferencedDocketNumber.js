"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferencedDocketNumber = void 0;
var ReferencedDocketNumber = (function () {
    function ReferencedDocketNumber() {
    }
    ReferencedDocketNumber.getAttributeTypeMap = function () {
        return ReferencedDocketNumber.attributeTypeMap;
    };
    ReferencedDocketNumber.discriminator = undefined;
    ReferencedDocketNumber.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "docketNumber",
            "baseName": "docketNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "docketEntriesAPI",
            "baseName": "docketEntriesAPI",
            "type": "string",
            "format": ""
        }
    ];
    return ReferencedDocketNumber;
}());
exports.ReferencedDocketNumber = ReferencedDocketNumber;
//# sourceMappingURL=ReferencedDocketNumber.js.map