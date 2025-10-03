/**
 * @module @kitledger/actions/log
 * Provides functions for writing to the script's execution log.
 */

/**
 * Writes a detailed message for debugging purposes.
 */
export declare function debug(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes an informational message about routine operations.
 */
export declare function info(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a warning message about a potential issue.
 */
export declare function warn(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a message about an error that occurred during execution.
 */
export declare function error(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a high-priority message for auditing business or security events.
 */
export declare function audit(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a critical message about a system failure requiring immediate attention.
 */
export declare function emergency(message: string, context?: Record<string, unknown>): Promise<void>;