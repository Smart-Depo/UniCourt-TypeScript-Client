export declare class ServiceStatusDownDetails {
    'object': string;
    'reason': ServiceStatusDownDetailsReasonEnum;
    'details': string | null;
    'eta': string | null;
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
export declare enum ServiceStatusDownDetailsReasonEnum {
    UnderMaintenance = "underMaintenance",
    NotIntegrated = "notIntegrated",
    BrokenIntegration = "brokenIntegration",
    SourceMigrated = "sourceMigrated"
}
