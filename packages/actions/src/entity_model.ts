import type { EntityModelCreateData } from "@kitledger/sdk/types";

/** Creates a new Entity Model definition. */
export async function create(data: EntityModelCreateData): Promise<string> {

	self.postMessage({
		type: "ACTION",
		data: data,
	});

	console.log("Creating Entity Model with data:", data);
	return Promise.resolve("1234");
};