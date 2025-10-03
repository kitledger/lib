/**
 * @module @kitledger/actions/log
 * Provides functions for writing to the script's execution log.
 * NOTE: This module only contains type declarations. The actual
 * implementation exists in the Kitledger runtime.
 */

/**
 * Writes a detailed message for debugging purposes.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function debug(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes an informational message about routine operations.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function info(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a warning message about a potential issue.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function warn(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a message about an error that occurred during execution.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function error(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a high-priority message for auditing business or security events.
 * For example, logging a major record deletion or a permission change.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function audit(message: string, context?: Record<string, unknown>): Promise<void>;

/**
 * Writes a critical message about a system failure requiring immediate attention.
 * @param message The message to log.
 * @param context Optional structured data for context.
 */
export declare function emergency(message: string, context?: Record<string, unknown>): Promise<void>;