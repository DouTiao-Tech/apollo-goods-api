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
 * @interface SpecBean
 */
export interface SpecBean {
    /**
     * 
     * @type {string}
     * @memberof SpecBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SpecBean
     */
    value?: string;
}

export function SpecBeanFromJSON(json: any): SpecBean {
    return SpecBeanFromJSONTyped(json, false);
}

export function SpecBeanFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecBean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function SpecBeanToJSON(value?: SpecBean | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}


