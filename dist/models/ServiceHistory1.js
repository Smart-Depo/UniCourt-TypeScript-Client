"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHistory1 = void 0;
var ServiceHistory1 = (function () {
    function ServiceHistory1() {
    }
    ServiceHistory1.getAttributeTypeMap = function () {
        return ServiceHistory1.attributeTypeMap;
    };
    ServiceHistory1.discriminator = undefined;
    ServiceHistory1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "appointedBy",
            "baseName": "appointedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "reasonForTermination",
            "baseName": "reasonForTermination",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCourt",
            "baseName": "sourceCourt",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromYear",
            "baseName": "fromYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "toYear",
            "baseName": "toYear",
            "type": "number",
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
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        }
    ];
    return ServiceHistory1;
}());
exports.ServiceHistory1 = ServiceHistory1;
//# sourceMappingURL=ServiceHistory1.js.map