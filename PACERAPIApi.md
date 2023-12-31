# .PACERAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#allCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/allCourts | PACER Case Locator Search API for All Courts.
[**allCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#allCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/allCourts | PACER Case Locator Search API for All Courts.
[**appealCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#appealCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/appealCourts | PACER Case Locator Search API for All Courts.
[**appealCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#appealCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/appealCourts | PACER Case Locator Search API for All Courts.
[**bankruptcyCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#bankruptcyCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/bankruptcyCourts | PACER Case Locator Search API for Bankruptcy Courts.
[**bankruptcyCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#bankruptcyCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/bankruptcyCourts | PACER Case Locator Search API for All Courts.
[**civilCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#civilCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/civilCourts | PACER Case Locator Search API for All Courts.
[**civilCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#civilCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/civilCourts | PACER Case Locator Search API for All Courts.
[**criminalCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#criminalCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/criminalCourts | PACER Case Locator Search API for All Courts.
[**criminalCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#criminalCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/criminalCourts | PACER Case Locator Search API for All Courts.
[**importPacerCaseByCourtUsingCaseNumber**](PACERAPIApi.md#importPacerCaseByCourtUsingCaseNumber) | **GET** /pacer/importCaseByCourtUsingCaseNumber | Find PACER Case for a requested Case Number and Court.
[**multiDistrictCourtsPacerCaseLocatorCaseSearch**](PACERAPIApi.md#multiDistrictCourtsPacerCaseLocatorCaseSearch) | **GET** /pacerCaseLocator/caseSearch/multiDistrictCourts | PACER Case Locator Search API for All Courts.
[**multiDistrictCourtsPacerCaseLocatorPartySearch**](PACERAPIApi.md#multiDistrictCourtsPacerCaseLocatorPartySearch) | **GET** /pacerCaseLocator/partySearch/multiDistrictCourts | PACER Case Locator Search API for All Courts.


# **allCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response allCourtsPacerCaseLocatorCaseSearch()

Search all courts within the PACER system for a particular case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiAllCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "21-119",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 17118,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.allCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **allCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response allCourtsPacerCaseLocatorPartySearch()

Search for the specified party across all PACER case filings.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiAllCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "21-119",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "Warden",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The suffix (e.g., Jr., III) of the target party\'s name. (optional)
  generation: "III",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.allCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The suffix (e.g., Jr., III) of the target party\&#39;s name. | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appealCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response appealCourtsPacerCaseLocatorCaseSearch()

Search for PACER cases filed in U.S. Courts of Appeals.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiAppealCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments & Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray=1110&natureOfSuitsArray=1150 (optional)
  natureOfSuitsArray: [
    "natureOfSuitsArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.appealCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **natureOfSuitsArray** | **Array&lt;string&gt;** | The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments &amp; Enforc. of Judgments), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;1110&amp;natureOfSuitsArray&#x3D;1150 | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appealCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response appealCourtsPacerCaseLocatorPartySearch()

Search for the specified party across all PACER appeals cases.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiAppealCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "Smith",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The suffix (e.g., Jr., III) of the target party\'s name. (optional)
  generation: "MD",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.appealCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The suffix (e.g., Jr., III) of the target party\&#39;s name. | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bankruptcyCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response bankruptcyCourtsPacerCaseLocatorCaseSearch()

Search for PACER cases filed in U.S. Bankruptcy Courts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiBankruptcyCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray=7&federalBankruptcyChapterArray=11 (optional)
  federalBankruptcyChapterArray: [
    "federalBankruptcyChapterArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDischargedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDischargedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDismissedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseDismissedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.bankruptcyCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **federalBankruptcyChapterArray** | **Array&lt;string&gt;** | The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers.    Scenario: When mulitple Federal Bankruptcy Chapters needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below.    Example: federalBankruptcyChapterArray&#x3D;7&amp;federalBankruptcyChapterArray&#x3D;11 | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseDischargedStartDate** | [**Date**] | The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDischargedEndDate** | [**Date**] | The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDismissedStartDate** | [**Date**] | The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDismissedEndDate** | [**Date**] | The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bankruptcyCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response bankruptcyCourtsPacerCaseLocatorPartySearch()

Search for the specified party in PACER bankruptcy filings.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiBankruptcyCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "Smith",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The suffix (e.g., Jr., III) of the target party\'s name. (optional)
  generation: "MD",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // string | The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes. (optional)
  ssnOrEin: "ssnOrEin_example",
  // string | The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified. (optional)
  fourDigitSsn: "fourDigitSsn_example",
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDischargedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDischargedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. (optional)
  caseDismissedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseDismissedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.bankruptcyCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The suffix (e.g., Jr., III) of the target party\&#39;s name. | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **ssnOrEin** | [**string**] | The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes. | (optional) defaults to undefined
 **fourDigitSsn** | [**string**] | The last four digits of the Social Security number of the target party.   Note: When specified, a last name/entity name must also be specified. | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseDischargedStartDate** | [**Date**] | The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDischargedEndDate** | [**Date**] | The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDismissedStartDate** | [**Date**] | The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00).    Note: This parameter is applicable since we only perform this search for Bankruptcy Court type. | (optional) defaults to undefined
 **caseDismissedEndDate** | [**Date**] | The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **civilCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response civilCourtsPacerCaseLocatorCaseSearch()

Search for civil cases filed in PACER.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiCivilCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray=110&natureOfSuitsArray=140 (optional)
  natureOfSuitsArray: [
    "natureOfSuitsArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.civilCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **natureOfSuitsArray** | **Array&lt;string&gt;** | The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases.    Scenario: When mulitple nature of suits needs to be requested.    Imagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below.    Example: natureOfSuitsArray&#x3D;110&amp;natureOfSuitsArray&#x3D;140 | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **civilCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response civilCourtsPacerCaseLocatorPartySearch()

Search for the specified party in civil cases filed in PACER.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiCivilCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "Smith",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The name suffix (e.g., III, MD). (optional)
  generation: "MD",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.civilCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The name suffix (e.g., III, MD). | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **criminalCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response criminalCourtsPacerCaseLocatorCaseSearch()

Search for criminal cases in PACER.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiCriminalCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.criminalCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **criminalCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response criminalCourtsPacerCaseLocatorPartySearch()

Search for the specified party in PACER criminal cases.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiCriminalCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "07-1026",
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "Smith",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The suffix (e.g., Jr., III) of the target party\'s name. (optional)
  generation: "MD",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.criminalCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The suffix (e.g., Jr., III) of the target party\&#39;s name. | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importPacerCaseByCourtUsingCaseNumber**
> ImportPacerCaseByCourtUsingCaseNumber200Response importPacerCaseByCourtUsingCaseNumber()

Import the specified case from PACER.    Workflow:     1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database.     2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId.    Note:     1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee.     2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiImportPacerCaseByCourtUsingCaseNumberRequest = {
  // string | The PACER username of the PACER account under which the case should be imported.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the case should be imported.
  pacerClientCode: "john",
  // string | The case number of the case to be imported.
  caseNumber: "2:15-mc-12345",
  // string | The courtId value of the court from which the case is to be imported.
  courtId: "CORTjF63b8Z4d2i9UB",
};

apiInstance.importPacerCaseByCourtUsingCaseNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The PACER username of the PACER account under which the case should be imported. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the case should be imported. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the case to be imported. | defaults to undefined
 **courtId** | [**string**] | The courtId value of the court from which the case is to be imported. | defaults to undefined


### Return type

**ImportPacerCaseByCourtUsingCaseNumber200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multiDistrictCourtsPacerCaseLocatorCaseSearch**
> AllCourtsPacerCaseLocatorCaseSearch200Response multiDistrictCourtsPacerCaseLocatorCaseSearch()

Search for multidistrict litigation in PACER.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiMultiDistrictCourtsPacerCaseLocatorCaseSearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "john_doe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "12-1234",
  // number | Master JPML Case Number. (optional)
  jpmlNumber: 875,
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.multiDistrictCourtsPacerCaseLocatorCaseSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **jpmlNumber** | [**number**] | Master JPML Case Number. | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorCaseSearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multiDistrictCourtsPacerCaseLocatorPartySearch**
> AllCourtsPacerCaseLocatorPartySearch200Response multiDistrictCourtsPacerCaseLocatorPartySearch()

Search for the specified party in multidistrict litigation in PACER.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERAPIApi(configuration);

let body:.PACERAPIApiMultiDistrictCourtsPacerCaseLocatorPartySearchRequest = {
  // string | The username of the PACER account under which the search is to be performed.
  pacerUserId: "johndoe",
  // string | The PACER client code under which the search is to be performed.
  pacerClientCode: "john",
  // string | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). (optional)
  caseNumber: "12-1234",
  // number | Master JPML Case Number. (optional)
  jpmlNumber: 1,
  // number | The PACER-assigned identifier of the target case. (optional)
  pacerCaseId: 1,
  // string | The last name (for an individual) or the entity name (for a business entity) of the target party. (optional)
  lastName: "John",
  // string | The first name of the target party. (optional)
  firstName: "John",
  // string | The middle name of the target party. (optional)
  middleName: "Doe",
  // string | The suffix (e.g., Jr., III) of the target party\'s name. (optional)
  generation: "III",
  // string | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyType: "ptf",
  // boolean | Specify whether the search string must match the name of the target party exactly. (optional)
  partyExactNameMatch: true,
  // Array<string> | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. (optional)
  partyRoleArray: [
    "plantiff",
  ],
  // string | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. (optional)
  caseTitle: "caseTitle_example",
  // number | The divisional office in which the case was filed. (optional)
  caseOffice: 1,
  // number | The PACER-assigned sequence number of the target case. Ex 12345 (optional)
  caseSequenceNumber: 1,
  // number | The two- or four-digit year in which the target case was filed. (optional)
  caseYear: 1,
  // Array<string> | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray=cv&caseTypeArray=cr (optional)
  caseTypeArray: [
    "caseTypeArray_example",
  ],
  // Array<string> | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray=cac&courtRegionIdArray=cae (optional)
  courtRegionIdArray: [
    "courtRegionIdArray_example",
  ],
  // number | Limit the results of the search to those cases from the year specified or later (optional)
  caseYearFrom: 1,
  // number | Limit the results of the search to those cases from the year specified or earlier (optional)
  caseYearTo: 1,
  // Date | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseFiledEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedStartDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). (optional)
  caseTerminatedEndDate: new Date('1970-01-01T00:00:00.00Z'),
  // string | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtId,ASC&caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC (optional)
  sortParameterQuery: "sort=caseYear,DESC",
  // 'open' | 'closed' | Whether the target case is marked as \'open\' or \'closed\' within PACER. (optional)
  caseStatus: "open",
  // number | The page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.multiDistrictCourtsPacerCaseLocatorPartySearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The username of the PACER account under which the search is to be performed. | defaults to undefined
 **pacerClientCode** | [**string**] | The PACER client code under which the search is to be performed. | defaults to undefined
 **caseNumber** | [**string**] | The case number of the target case. You may use the following case-number formats:    yy-nnnnn    yy-tp-nnnnn    yy tp nnnnn    yytpnnnnn    o:yy-nnnnn    o:yy-tp-nnnnn    o:yy tp nnnnn    o:yytpnnnnn   where:   yy  case year (may be 2 or 4 digits)   nnnnn  case number (up to 5 digits)   tp  case type (up to 2 characters)   o  office where the case was filed (1 digit). | (optional) defaults to undefined
 **jpmlNumber** | [**number**] | Master JPML Case Number. | (optional) defaults to undefined
 **pacerCaseId** | [**number**] | The PACER-assigned identifier of the target case. | (optional) defaults to undefined
 **lastName** | [**string**] | The last name (for an individual) or the entity name (for a business entity) of the target party. | (optional) defaults to undefined
 **firstName** | [**string**] | The first name of the target party. | (optional) defaults to undefined
 **middleName** | [**string**] | The middle name of the target party. | (optional) defaults to undefined
 **generation** | [**string**] | The suffix (e.g., Jr., III) of the target party\&#39;s name. | (optional) defaults to undefined
 **partyType** | [**string**] | The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **partyExactNameMatch** | [**boolean**] | Specify whether the search string must match the name of the target party exactly. | (optional) defaults to undefined
 **partyRoleArray** | **Array&lt;string&gt;** | The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court. | (optional) defaults to undefined
 **caseTitle** | [**string**] | The title of the target case.    Examples:    A search for case title john doe v will result in all cases with the case title John Doe v.    A search for case title Acme, Inc. will result in all case titles starting with Acme, Inc. | (optional) defaults to undefined
 **caseOffice** | [**number**] | The divisional office in which the case was filed. | (optional) defaults to undefined
 **caseSequenceNumber** | [**number**] | The PACER-assigned sequence number of the target case. Ex 12345 | (optional) defaults to undefined
 **caseYear** | [**number**] | The two- or four-digit year in which the target case was filed. | (optional) defaults to undefined
 **caseTypeArray** | **Array&lt;string&gt;** | The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values.    Scenario: When mulitple case types needs to be requested.    Imagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below.    Example: caseTypeArray&#x3D;cv&amp;caseTypeArray&#x3D;cr | (optional) defaults to undefined
 **courtRegionIdArray** | **Array&lt;string&gt;** | The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values.    Scenario: When mulitple court region ids needs to be requested.    Imagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below.    Example: courtRegionIdArray&#x3D;cac&amp;courtRegionIdArray&#x3D;cae | (optional) defaults to undefined
 **caseYearFrom** | [**number**] | Limit the results of the search to those cases from the year specified or later | (optional) defaults to undefined
 **caseYearTo** | [**number**] | Limit the results of the search to those cases from the year specified or earlier | (optional) defaults to undefined
 **caseFiledStartDate** | [**Date**] | The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseFiledEndDate** | [**Date**] | The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedStartDate** | [**Date**] | The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **caseTerminatedEndDate** | [**Date**] | The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). | (optional) defaults to undefined
 **sortParameterQuery** | [**string**] | How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings.    Scenario 1: When mulitple sort paramters needs to be requested.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtId,ASC&amp;caseId,ASC    Scenario 2: When you want to sort the response using the case parameters in the party search.    Imagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below.    Example: sortParameterQuery&#x3D;courtCase.caseOffice,ASC&amp;caseid,DESC | (optional) defaults to 'sort=caseYear,DESC'
 **caseStatus** | [**&#39;open&#39; | &#39;closed&#39;**]**Array<&#39;open&#39; &#124; &#39;closed&#39;>** | Whether the target case is marked as \&#39;open\&#39; or \&#39;closed\&#39; within PACER. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**AllCourtsPacerCaseLocatorPartySearch200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


