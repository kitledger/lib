/**
 * @module @kitledger/actions/http
 * Provides functions for making outbound HTTP requests.
 */

/**
 * Represents the structured response from an HTTP request.
 */
export declare type HttpResponse<T = unknown> = {
    status: number;
    headers: Record<string, string>;
    body: T;
};

/**
 * Common options for all HTTP requests.
 */
export declare type HttpRequestOptions = {
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
};

/**
 * Options for HTTP requests that include a body, like POST and PUT.
 */
export declare type HttpBodyRequestOptions = HttpRequestOptions & {
    body: string | Record<string, unknown>;
};

/**
 * Makes an HTTP GET request.
 */
export declare function get<T = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP POST request.
 */
export declare function post<T = unknown>(url:string, options: HttpBodyRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP PUT request.
 */
export declare function put<T = unknown>(url: string, options: HttpBodyRequestOptions): Promise<HttpResponse<T>>;

/**
 * Makes an HTTP DELETE request.
 */
export declare function del<T = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<T>>;