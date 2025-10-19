export const __API_METHODS = [
	"UNIT_MODEL.CREATE",
] as const;

export type Method = typeof __API_METHODS[number];

export type ActionRequestPayload<T> = {
	id: string;
	method: Method;
	/** The data payload for the action */
	payload: T;
};

export type ExecutionResultPayload = {
	status: "SUCCESS" | "ERROR";
	error?: string;
};

export type WorkerToHostMessage<TRequest> =
	| { type: "ACTION_REQUEST"; payload: ActionRequestPayload<TRequest> }
	| { type: "EXECUTION_RESULT"; payload: ExecutionResultPayload };

export type ActionResponsePayload<TResponse> = {
	id: string;
	result?: TResponse;
	error?: string;
};

export type HostToWorkerMessage<TResponse> = {
	type: "ACTION_RESPONSE";
	payload: ActionResponsePayload<TResponse>;
};

// --- Internal RPC Implementation ---

/**
 * The internal, type-safe RPC function.
 * @param TRequest The type of the data being sent.
 * @param TResponse The expected type of the data being returned.
 */
export function __host_rpc<TRequest, TResponse>(
	method: Method,
	data: TRequest,
): Promise<TResponse> {
	return new Promise((resolve, reject) => {
		const id = crypto.randomUUID();
		const payload: ActionRequestPayload<TRequest> = { id, method, payload: data };

		const responseHandler = (event: MessageEvent<HostToWorkerMessage<unknown>>) => {
			if (event.data &&
				event.data.type === "ACTION_RESPONSE" &&
				event.data.payload.id === id)
			{
				self.removeEventListener("message", responseHandler);
				const { result, error } = event.data.payload;

				if (error) {
					reject(new Error(error));
				} else {
					resolve(result as TResponse);
				}
			}
		};

		self.addEventListener("message", responseHandler);
		self.postMessage({ type: "ACTION_REQUEST", payload });
	});
}