/**
 * @module @kitledger/actions/http
 * Provides functions for making outbound HTTP requests to allow-listed domains.
 * NOTE: This module only contains type declarations. The actual
 * implementation exists in the Kitledger runtime.
 */

/**
 * Represents the structured response from an HTTP request.
 */
export declare type HttpResponse<T = unknown> = {
    /** The HTTP status code of the response (e.g., 200, 404). */
    status: number;
    /** The response headers. */
    headers: Record<string, string>;
    /** The response body, parsed as JSON if possible. */
    body: T;
};

/**
 * Common options for all HTTP requests.
 */
export declare type HttpRequestOptions = {
    /** A record of request headers. */
    headers?: Record<string, string>;
    /** A record of query string parameters to be appended to the URL. */
    params?: Record<string, string | number>;
};

/**
 * Options for HTTP requests that include a body, like POST and PUT.
 */
export declare type HttpBodyRequestOptions = HttpRequestOptions & {
    /** The request body. Can be a raw string or an object that will be JSON-serialized. */
    body: string | Record<string, unknown>;
};

/**
 * Makes an HTTP GET request.
 * @param url The URL to request.
 * @param options Request options such as headers and query parameters.
 * @returns A promise that resolves with the HTTP response.
 */
export declare function get<T = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP POST request.
 * @param url The URL to which to post data.
 * @param options Request options including the body, headers, and query parameters.
 * @returns A promise that resolves with the HTTP response.
 */
export declare function post<T = unknown>(url:string, options: HttpBodyRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP PUT request.
 * @param url The URL to which to put data.
 * @param options Request options including the body, headers, and query parameters.
 * @returns A promise that resolves with the HTTP response.
 */
export declare function put<T = unknown>(url: string, options: HttpBodyRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP DELETE request.
 * @param url The URL of the resource to delete.
 * @param options Request options such as headers and query parameters.
 * @returns A promise that resolves with the HTTP response.
 */
export declare function del<T = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<T>>;