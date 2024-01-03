export declare class BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner {
    'finalDecision': string | null;
    'finalDecisionDate': Date | null;
    'grievanceComplaintNumber': string | null;
    'publicComments': string | null;
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
