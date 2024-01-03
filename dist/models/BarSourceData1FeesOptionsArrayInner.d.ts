export declare class BarSourceData1FeesOptionsArrayInner {
    'contingencyFees': string | null;
    'flatFees': string | null;
    'hourlyRate': string | null;
    'paymentPlans': string | null;
    'slidingScaleFees': string | null;
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
