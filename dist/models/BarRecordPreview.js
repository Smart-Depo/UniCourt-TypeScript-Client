"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarRecordPreview = void 0;
var BarRecordPreview = (function () {
    function BarRecordPreview() {
    }
    BarRecordPreview.getAttributeTypeMap = function () {
        return BarRecordPreview.attributeTypeMap;
    };
    BarRecordPreview.discriminator = undefined;
    BarRecordPreview.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "barSourceType",
            "baseName": "barSourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "barNumber",
            "baseName": "barNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateCode",
            "baseName": "stateCode",
            "type": "string",
            "format": ""
        }
    ];
    return BarRecordPreview;
}());
exports.BarRecordPreview = BarRecordPreview;
//# sourceMappingURL=BarRecordPreview.js.map