"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarNormAttorney = void 0;
var SimilarNormAttorney = (function () {
    function SimilarNormAttorney() {
    }
    SimilarNormAttorney.getAttributeTypeMap = function () {
        return SimilarNormAttorney.attributeTypeMap;
    };
    SimilarNormAttorney.discriminator = undefined;
    SimilarNormAttorney.attributeTypeMap = [
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
    return SimilarNormAttorney;
}());
exports.SimilarNormAttorney = SimilarNormAttorney;
//# sourceMappingURL=SimilarNormAttorney.js.map