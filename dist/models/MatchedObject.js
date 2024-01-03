"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchedObject = void 0;
var MatchedObject = (function () {
    function MatchedObject() {
    }
    MatchedObject.getAttributeTypeMap = function () {
        return MatchedObject.attributeTypeMap;
    };
    MatchedObject.discriminator = undefined;
    MatchedObject.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchedObjectId",
            "baseName": "matchedObjectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchedObjectName",
            "baseName": "matchedObjectName",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchedObjectAttribute",
            "baseName": "matchedObjectAttribute",
            "type": "string",
            "format": ""
        },
        {
            "name": "highlightSnippet",
            "baseName": "highlightSnippet",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchedObjectAPI",
            "baseName": "matchedObjectAPI",
            "type": "string",
            "format": "uri"
        }
    ];
    return MatchedObject;
}());
exports.MatchedObject = MatchedObject;
//# sourceMappingURL=MatchedObject.js.map