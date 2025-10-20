// --- Base Kitledger Data Structures ---

/** The base shape for a Kitledger record. */
export type KRecord = {
	id: string;
	/** The record's type identifier (e.g., "customer", "invoice"). */
	type: string;
	[key: string]: unknown;
};

/** An inbound HTTP request. */
export type KRequest<TBody = unknown> = {
	headers: Record<string, string>;
	queryParameters: Record<string, string>;
	body: string;
	json: () => TBody;
};

/** An outbound HTTP response. */
export type KResponse = {
	statusCode: number;
	setHeader(name: string, value: string): void;
	send(data: string): void;
	json(data: unknown): void;
};

/** A message from a Kitledger queue. */
export type KQueueMessage<TBody = unknown> = {
	id: string;
	payload: TBody;
	timestamp: string;
};

// --- Input Definitions ---

/** Base properties available in all script inputs. */
export type BaseInput = {
	user: { id: string; email: string };
	account: { id: string };
	parameters: Record<string, string | number | boolean>;
};

/** Input for 'ServerEvent' scripts, typed with the record shapes. */
export type ServerEventInput<
	TNew extends KRecord,
	TOld extends KRecord = TNew,
> = BaseInput & {
	type: "ServerEvent";
	trigger:
		| "beforeCreate"
		| "beforeUpdate"
		| "beforeDelete"
		| "afterCreate"
		| "afterUpdate"
		| "afterDelete";
	/** The record being modified. */
	newRecord: TNew;
	/** The record before the modification (on update/delete). */
	oldRecord?: TOld;
};

export type ScheduledTaskInput = BaseInput & {
	type: "ScheduledTask";
	scheduledTime: string;
};

/** Input for 'QueuedTask' scripts, typed with the message payload. */
export type QueuedTaskInput<TBody = unknown> = BaseInput & {
	type: "QueuedTask";
	message: KQueueMessage<TBody>;
};

/** Input for 'EndpointRequest' scripts, typed with the request body. */
export type EndpointRequestInput<TBody = unknown> = BaseInput & {
	type: "EndpointRequest";
	request: KRequest<TBody>;
	response: KResponse;
};

/** A union of all possible script inputs. */
export type ScriptInput =
	| ServerEventInput<KRecord>
	| ScheduledTaskInput
	| QueuedTaskInput
	| EndpointRequestInput;