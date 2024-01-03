export declare class PACERSearchReceipt {
    'object': string;
    'transactionDate': Date;
    'searchFee': string;
    'billablePages': number;
    'loginId': string;
    'clientCode': string | null;
    'firmId': string | null;
    'search': string | null;
    'description': string | null;
    'csoId': number | null;
    'reportId': string | null;
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
