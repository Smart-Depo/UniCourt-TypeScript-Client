"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarSourceData1CourtOfAdmissions = void 0;
var BarSourceData1CourtOfAdmissions = (function () {
    function BarSourceData1CourtOfAdmissions() {
    }
    BarSourceData1CourtOfAdmissions.getAttributeTypeMap = function () {
        return BarSourceData1CourtOfAdmissions.attributeTypeMap;
    };
    BarSourceData1CourtOfAdmissions.discriminator = undefined;
    BarSourceData1CourtOfAdmissions.attributeTypeMap = [
        {
            "name": "courtStateArray",
            "baseName": "courtStateArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "federalArray",
            "baseName": "federalArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "otherCourtsArray",
            "baseName": "otherCourtsArray",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return BarSourceData1CourtOfAdmissions;
}());
exports.BarSourceData1CourtOfAdmissions = BarSourceData1CourtOfAdmissions;
//# sourceMappingURL=BarSourceData1CourtOfAdmissions.js.map