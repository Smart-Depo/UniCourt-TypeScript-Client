export declare class GetPacerCredential200ResponsePacerCredentialArrayInner {
    'object': string;
    'pacerUserId': string;
    'defaultPacerClientCode': string | null;
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
