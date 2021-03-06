/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Trade,
    TradeFromJSON,
    TradeToJSON,
} from '../models';

export interface FindOneRequest {
    id: number;
}

/**
 * 
 */
export class TradeControllerApi extends runtime.BaseAPI {

    /**
     */
    async findOneRaw(requestParameters: FindOneRequest): Promise<runtime.ApiResponse<Trade>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOne.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trade/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TradeFromJSON(jsonValue));
    }

    /**
     */
    async findOne(requestParameters: FindOneRequest): Promise<Trade> {
        const response = await this.findOneRaw(requestParameters);
        return await response.value();
    }

}
