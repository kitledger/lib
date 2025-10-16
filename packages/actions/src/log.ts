/**
 * @module @kitledger/actions/log
 * Provides functions for writing to the script's execution log.
 */

/**
 * Writes a detailed message for debugging purposes.
 */
export function debug(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.debug(message, context);
	return Promise.resolve(true);
}

/**
 * Writes an informational message about routine operations.
 */
export function info(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.info(message, context);
	return Promise.resolve(true);
}

/**
 * Writes a warning message about a potential issue.
 */
export function warn(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.warn(message, context);
	return Promise.resolve(true);
}

/**
 * Writes a message about an error that occurred during execution.
 */
export function error(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.error(message, context);
	return Promise.resolve(true);
}

/**
 * Writes a high-priority message for auditing business or security events.
 */
export function audit(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.log(`AUDIT: ${message}`, context);
	return Promise.resolve(true);
}

/**
 * Writes a critical message about a system failure requiring immediate attention.
 */
export function emergency(message: string, context?: Record<string, unknown>): Promise<boolean> {
	console.error(`EMERGENCY: ${message}`, context);
	return Promise.resolve(true);
}