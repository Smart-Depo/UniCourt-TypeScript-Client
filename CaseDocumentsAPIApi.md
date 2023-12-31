# .CaseDocumentsAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaseDocumentDownloadById**](CaseDocumentsAPIApi.md#getCaseDocumentDownloadById) | **GET** /caseDocumentDownload/{caseDocumentId} | Gets downloadable URL for a requested Document ID.
[**getCaseDocumentOrderCallbackById**](CaseDocumentsAPIApi.md#getCaseDocumentOrderCallbackById) | **GET** /caseDocumentOrder/callbacks/{caseDocumentOrderCallbackId} | Get Case Document Order Callback for a requested Case Document Order Callback Id.
[**getCaseDocumentOrderCallbacks**](CaseDocumentsAPIApi.md#getCaseDocumentOrderCallbacks) | **GET** /caseDocumentOrder/callbacks | Get Case Document Order Callback list for a requested Date.
[**getCaseDocuments**](CaseDocumentsAPIApi.md#getCaseDocuments) | **GET** /case/{caseId}/documents | Gets Documents for a requested Case ID.
[**getDocumentById**](CaseDocumentsAPIApi.md#getDocumentById) | **GET** /caseDocument/{caseDocumentId} | Gets details for a requested Document ID.
[**orderCaseDocument**](CaseDocumentsAPIApi.md#orderCaseDocument) | **PUT** /caseDocumentOrder | Add Case Document Order for requested Document Ids.


# **getCaseDocumentDownloadById**
> GetCaseDocumentDownloadById200Response getCaseDocumentDownloadById()

Gets downloadable URL for a requested Document ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiGetCaseDocumentDownloadByIdRequest = {
  // string | Document ID which you want to download.
  caseDocumentId: "CDOCaqe42a86394f63",
  // boolean | If the document you want to download is a preview of a document. (optional)
  isPreviewDocument: true,
};

apiInstance.getCaseDocumentDownloadById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseDocumentId** | [**string**] | Document ID which you want to download. | defaults to undefined
 **isPreviewDocument** | [**boolean**] | If the document you want to download is a preview of a document. | (optional) defaults to false


### Return type

**GetCaseDocumentDownloadById200Response**

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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseDocumentOrderCallbackById**
> OrderCaseDocument200Response getCaseDocumentOrderCallbackById()

Get Case Document Order Callback for a requested Case Document Order Callback Id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiGetCaseDocumentOrderCallbackByIdRequest = {
  // string | Unique Id for the Case Document Order Callback.
  caseDocumentOrderCallbackId: "CBDOp2o7L63f47ce15",
};

apiInstance.getCaseDocumentOrderCallbackById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseDocumentOrderCallbackId** | [**string**] | Unique Id for the Case Document Order Callback. | defaults to undefined


### Return type

**OrderCaseDocument200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseDocumentOrderCallbacks**
> GetCaseDocumentOrderCallbacks200Response getCaseDocumentOrderCallbacks()

Get Case Document Order Callback list for a requested Date.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiGetCaseDocumentOrderCallbacksRequest = {
  // Date | Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date. (optional)
  date: new Date('2023-03-08T10:17:56+00:00'),
  // 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE' | 'FAILURE' | Status of Document Order callbacks. Default status will fetch all callbacks. (optional)
  status: "",
  // number | Page to fetch the Case Document Order Callback list.<br>   - Minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getCaseDocumentOrderCallbacks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | [**Date**] | Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date. | (optional) defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;DELAYED&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;DELAYED&#39; &#124; &#39;COMPLETE&#39; &#124; &#39;FAILURE&#39;>** | Status of Document Order callbacks. Default status will fetch all callbacks. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Page to fetch the Case Document Order Callback list.&lt;br&gt;   - Minimum: 1  | (optional) defaults to 1


### Return type

**GetCaseDocumentOrderCallbacks200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseDocuments**
> GetCase200ResponseCaseDocuments getCaseDocuments()

Gets Documents for a requested Case ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiGetCaseDocumentsRequest = {
  // string | Case ID for which you want the data for.
  caseId: "CASEgua4c06e119ea8",
  // boolean | Filter all the documents those are added to the UniCourt library. (optional)
  inLibrary: true,
  // Date | Get all the documents which were added to the case on or after a specific date. (optional)
  afterFirstFetchDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Sort all the documents based on the date when the document was added to the UniCourt Library. (optional)
  libraryDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Sort all the documents based on the date it was fetched from the source site. (optional)
  firstFetchDate: new Date('1970-01-01T00:00:00.00Z'),
  // 'latest to oldest' | 'oldest to latest' | Sort documents with document order. (optional)
  sortBy: "latest to oldest",
  // number | The page for which the result should be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Case ID for which you want the data for. | defaults to undefined
 **inLibrary** | [**boolean**] | Filter all the documents those are added to the UniCourt library. | (optional) defaults to undefined
 **afterFirstFetchDate** | [**Date**] | Get all the documents which were added to the case on or after a specific date. | (optional) defaults to undefined
 **libraryDate** | [**Date**] | Sort all the documents based on the date when the document was added to the UniCourt Library. | (optional) defaults to undefined
 **firstFetchDate** | [**Date**] | Sort all the documents based on the date it was fetched from the source site. | (optional) defaults to undefined
 **sortBy** | [**&#39;latest to oldest&#39; | &#39;oldest to latest&#39;**]**Array<&#39;latest to oldest&#39; &#124; &#39;oldest to latest&#39;>** | Sort documents with document order. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page for which the result should be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseCaseDocuments**

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
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDocumentById**
> GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner getDocumentById()

Gets details for a requested Document ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiGetDocumentByIdRequest = {
  // string | Specific Case Dcoument ID for which you want the data for.
  caseDocumentId: "CDOCag3e5eba43b870",
};

apiInstance.getDocumentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseDocumentId** | [**string**] | Specific Case Dcoument ID for which you want the data for. | defaults to undefined


### Return type

**GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInner**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderCaseDocument**
> OrderCaseDocument200Response orderCaseDocument()

Add Case Document Order for requested Document Ids. The status will be ``IN_PROGRESS`` after it has been requested. If the request is not processed within 4 hours, it will be reported as ``DELAYED``.  If the request is still incomplete after 4 hours, it will remain in the DELAYED status for up to 72 hours after the request was approved. Such requests will be recorded as ``TIMEOUT`` after 72 hours.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocumentsAPIApi(configuration);

let body:.CaseDocumentsAPIApiOrderCaseDocumentRequest = {
  // OrderCaseDocumentRequest | If the Case Document Order is for Preview, then the value for ``isPreviewOnly`` should be ``true`` else ``false``.  (optional)
  orderCaseDocumentRequest: {
    caseDocumentId: "CDOCcre989d654fa05",
    isPreviewOnly: true,
    pacerOptions: {
      pacerUserId: "URKYwer3tyh5r56gq2",
      pacerClientCode: "Test UniCourt API",
    },
  },
};

apiInstance.orderCaseDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCaseDocumentRequest** | **OrderCaseDocumentRequest**| If the Case Document Order is for Preview, then the value for &#x60;&#x60;isPreviewOnly&#x60;&#x60; should be &#x60;&#x60;true&#x60;&#x60; else &#x60;&#x60;false&#x60;&#x60;.  |


### Return type

**OrderCaseDocument200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**402** | Payment Required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


