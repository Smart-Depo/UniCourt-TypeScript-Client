export declare class PACERSearchPageInfo {
    'object': string;
    'number': number;
    'size': number;
    'totalPages': number;
    'totalElements': number;
    'numberOfElements': number;
    'first': boolean;
    'last': boolean;
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
