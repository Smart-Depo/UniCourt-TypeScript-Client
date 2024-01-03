import { BarRecordPreview1 } from '../models/BarRecordPreview1';
export declare class SimilarNormAttorney1 {
    'object': string;
    'normAttorneyId': string;
    'normAttorneyAPI': string;
    'name': string;
    'normAttorneySimilarityScore': number;
    'barRecordPreviewArray': Array<BarRecordPreview1>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
