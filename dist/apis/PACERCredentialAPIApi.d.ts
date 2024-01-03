import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AddPacerCredentialRequest } from '../models/AddPacerCredentialRequest';
import { GetPacerCredential200Response } from '../models/GetPacerCredential200Response';
import { GetPacerCredential200ResponsePacerCredentialArrayInner } from '../models/GetPacerCredential200ResponsePacerCredentialArrayInner';
import { Success1 } from '../models/Success1';
export declare class PACERCredentialAPIApiRequestFactory extends BaseAPIRequestFactory {
    addPacerCredential(addPacerCredentialRequest?: AddPacerCredentialRequest, _options?: Configuration): Promise<RequestContext>;
    getPacerCredential(pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    getPacerCredentialById(pacerUserId: string, _options?: Configuration): Promise<RequestContext>;
    removePacerCredentialById(pacerUserId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PACERCredentialAPIApiResponseProcessor {
    addPacerCredentialWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
    getPacerCredentialWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPacerCredential200Response>>;
    getPacerCredentialByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPacerCredential200ResponsePacerCredentialArrayInner>>;
    removePacerCredentialByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Success1>>;
}
