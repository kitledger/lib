import { ScriptableObjectTypes } from "@kitledger/sdk/types";

/** A serializable value for a parameter, or a secret reference. */
export type ParameterValue = string | number | boolean | { secret: string };

// --- Script Definitions ---

/** Common properties shared by all script types. */
type BaseScript = {
	name: string;
	file: string;
	timeout?: number;
};

export type ServerEventScript = BaseScript & {
	type: "ServerEvent";
	objectType: ScriptableObjectTypes;
	events: (
		| "beforeCreate"
		| "beforeUpdate"
		| "beforeDelete"
		| "afterCreate"
		| "afterUpdate"
		| "afterDelete"
	)[];
};

export type ScheduledTaskScript = BaseScript & {
	type: "ScheduledTask";
	cron: string;
	parameters?: Record<string, ParameterValue>;
};

export type QueuedTaskScript = BaseScript & {
	type: "QueuedTask";
	queue: string;
	concurrency?: number;
};

export type EndpointRequestScript = BaseScript & {
	type: "EndpointRequest";
	path: string;
	verbs: ("GET" | "POST" | "PUT" | "PATCH" | "DELETE")[];
};

/** A union of all possible Kit Actions Script configurations. */
export type KitledgerScript =
	| ServerEventScript
	| ScheduledTaskScript
	| QueuedTaskScript
	| EndpointRequestScript;

// --- Config File Structure ---

export type KitledgerPackage = {
	name: string;
	path: string;
	scripts: KitledgerScript[];
};

export type KitledgerConfig = {
	projectName: string;
	packages: KitledgerPackage[];
};

/** A helper function for type-safety and autocomplete in your config. */
export function defineConfig(config: KitledgerConfig): KitledgerConfig {
	return config;
}