import { BarSourceData1 } from '../models/BarSourceData1';
import { GetCase200ResponsePartiesPartyArrayInnerContact } from '../models/GetCase200ResponsePartiesPartyArrayInnerContact';
export declare class BarRecord {
    'object': string;
    'barNumber': string | null;
    'barSourceType': string;
    'admittedDate': Date | null;
    'stateCode': string;
    'status': BarRecordStatusEnum;
    'inactivationDate': Date | null;
    'barSourceData': BarSourceData1;
    'contact': GetCase200ResponsePartiesPartyArrayInnerContact;
    'firstFetchDate': Date;
    'lastFetchDate': Date;
    'lastFetchDateWithUpdates': Date;
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
export declare enum BarRecordStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    NotClassified = "Not Classified",
    Unknown = "Unknown"
}
