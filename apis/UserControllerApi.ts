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
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface CurrentUserRequest {
    user: User;
}

export interface GetUserRequest {
    id: number;
}

export interface LoginRequest {
    principal: string;
    credential: string;
}

export interface LogoutRequest {
    user?: User;
}

export interface RegisterRequest {
    user: User;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async currentUserRaw(requestParameters: CurrentUserRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling currentUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/api/session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async currentUser(requestParameters: CurrentUserRequest): Promise<User> {
        const response = await this.currentUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async getUser(requestParameters: GetUserRequest): Promise<User> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async helloRaw(): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async hello(): Promise<string> {
        const response = await this.helloRaw();
        return await response.value();
    }

    /**
     */
    async loginRaw(requestParameters: LoginRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.principal === null || requestParameters.principal === undefined) {
            throw new runtime.RequiredError('principal','Required parameter requestParameters.principal was null or undefined when calling login.');
        }

        if (requestParameters.credential === null || requestParameters.credential === undefined) {
            throw new runtime.RequiredError('credential','Required parameter requestParameters.credential was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        if (requestParameters.principal !== undefined) {
            queryParameters['principal'] = requestParameters.principal;
        }

        if (requestParameters.credential !== undefined) {
            queryParameters['credential'] = requestParameters.credential;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/api/session`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest): Promise<User> {
        const response = await this.loginRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async logoutRaw(requestParameters: LogoutRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/api/session`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async logout(requestParameters: LogoutRequest): Promise<void> {
        await this.logoutRaw(requestParameters);
    }

    /**
     */
    async registerRaw(requestParameters: RegisterRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling register.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/api/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async register(requestParameters: RegisterRequest): Promise<User> {
        const response = await this.registerRaw(requestParameters);
        return await response.value();
    }

}
