export declare class GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetails {
    'object': string;
    'reason': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum;
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
export declare enum GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatusServiceStatusDownDetailsReasonEnum {
    UnderMaintenance = "underMaintenance",
    NotIntegrated = "notIntegrated",
    BrokenIntegration = "brokenIntegration",
    SourceMigrated = "sourceMigrated"
}
