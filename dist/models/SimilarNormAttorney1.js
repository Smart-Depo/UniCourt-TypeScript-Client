"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarNormAttorney1 = void 0;
var SimilarNormAttorney1 = (function () {
    function SimilarNormAttorney1() {
    }
    SimilarNormAttorney1.getAttributeTypeMap = function () {
        return SimilarNormAttorney1.attributeTypeMap;
    };
    SimilarNormAttorney1.discriminator = undefined;
    SimilarNormAttorney1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyAPI",
            "baseName": "normAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneySimilarityScore",
            "baseName": "normAttorneySimilarityScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "barRecordPreviewArray",
            "baseName": "barRecordPreviewArray",
            "type": "Array<BarRecordPreview1>",
            "format": ""
        }
    ];
    return SimilarNormAttorney1;
}());
exports.SimilarNormAttorney1 = SimilarNormAttorney1;
//# sourceMappingURL=SimilarNormAttorney1.js.map