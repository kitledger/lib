/**
 * @module @kitledger/actions/context
 * Provides access to information about the script's execution context,
 * including the invoking principal, the invocation source, and governance limits.
 */

/**
 * Represents the entity (a user or system process) on whose behalf the script is running.
 * This is the 'who'.
 */
export type Principal = {
    /** The internal unique ID of the principal. */
    id: string;
    /** The type of principal, e.g., 'USER' or 'SYSTEM'. */
    type: 'USER' | 'ROLE';
    /** The email address, if the principal is a user. */
    email?: string;
	/** The list of permissions the script has access to */
	permissions: string[];
	/** The list of system permissions the script has access to */
	systemPermissions?: string[];
};

/**
 * Describes the event that triggered the script's execution.
 * This is the 'why'.
 */
export type Invocation = {
    /** The source that triggered the execution. */
    source: 'SERVER_ACTIONS';
    /** The unique ID of the script deployment being executed. */
    deploymentId: string;
};

/**
 * Details the resource consumption limits for the current execution.
 * This is the 'what'.
 */
export type Governance = {
    /** Remaining CPU time in milliseconds. */
    cpuTime: number;
    /** Remaining memory allocation in megabytes. */
    memory: number;
};

/**
 * Returns the principal (user or system) that initiated the current execution.
 */
export declare function getPrincipal(): Promise<Principal>;

/**
 * Returns details about the event that triggered the script.
 */
export declare function getInvocation(): Promise<Invocation>;

/**
 * Returns the remaining governance limits for the current execution.
 * Scripts can use this to manage their resource usage gracefully.
 */
export declare function getGovernance(): Promise<Governance>;