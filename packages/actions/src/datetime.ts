/**
 * @module @kitledger/actions/datetime
 * Provides UTC-based utilities for parsing, formatting, and manipulating
 * ISO 8601 date-time strings.
 */

/**
 * Represents a duration of time. Each property is optional.
 */
export interface Duration {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

/**
 * Returns the current moment in time as a UTC ISO 8601 string.
 * This is the recommended way to get a timestamp within a script.
 */
export declare function now(): Promise<string>;

/**
 * Parses a date string in a given format into a standard UTC ISO 8601 string.
 * The format string uses tokens from libraries like date-fns (e.g., 'yyyy-MM-dd HH:mm:ss').
 * @example
 * // returns '2025-10-25T00:00:00.000Z'
 * kl.datetime.parse({ dateString: '2025-10-25', format: 'yyyy-MM-dd' })
 */
export declare function parse(options: { dateString: string; format: string; }): Promise<string>;

/**
 * Formats a UTC ISO 8601 string into a custom-formatted string.
 * The format string uses tokens from libraries like date-fns.
 * @example
 * // returns 'Sunday, October 5, 2025'
 * kl.datetime.format({ isoString: '2025-10-05T14:45:00.000Z', format: 'PPPP' })
 */
export declare function format(options: { isoString: string; format: string; }): Promise<string>;

/**
 * Adds a duration to a given UTC ISO 8601 string and returns the new date-time string.
 * @example
 * // returns '2025-11-04T15:00:00.000Z'
 * kl.datetime.add({
 * isoString: '2025-10-05T15:00:00.000Z',
 * duration: { days: 30 }
 * })
 */
export declare function add(options: { isoString: string; duration: Duration; }): Promise<string>;

/**
 * Subtracts a duration from a given UTC ISO 8601 string and returns the new date-time string.
 */
export declare function subtract(options: { isoString: string; duration: Duration; }): Promise<string>;