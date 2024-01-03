export declare class CaseCountAnalyticsByCaseFiledDate {
    'object': string;
    'caseCount': number;
    'caseSearchAPI': string;
    'groupedBy': CaseCountAnalyticsByCaseFiledDateGroupedByEnum;
    'year': number;
    'quarter': CaseCountAnalyticsByCaseFiledDateQuarterEnum | null;
    'monthString': CaseCountAnalyticsByCaseFiledDateMonthStringEnum | null;
    'monthInt': number | null;
    'weekOfYear': number | null;
    'weekOfMonth': number | null;
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
export declare enum CaseCountAnalyticsByCaseFiledDateGroupedByEnum {
    Yearly = "Yearly",
    Quarterly = "Quarterly",
    Monthly = "Monthly",
    Weekly = "Weekly"
}
export declare enum CaseCountAnalyticsByCaseFiledDateQuarterEnum {
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4",
    Null = "null"
}
export declare enum CaseCountAnalyticsByCaseFiledDateMonthStringEnum {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
    Null = "null"
}
