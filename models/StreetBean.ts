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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StreetBean
 */
export interface StreetBean {
    /**
     * 
     * @type {string}
     * @memberof StreetBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StreetBean
     */
    id?: string;
}

export function StreetBeanFromJSON(json: any): StreetBean {
    return StreetBeanFromJSONTyped(json, false);
}

export function StreetBeanFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreetBean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StreetBeanToJSON(value?: StreetBean | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
    };
}


