/** Creates a new Entity Model definition. */

export type EntityModel = {
	id: string;
	name: string;
}

export function create(data: EntityModel): Promise<EntityModel> {
	return Promise.resolve(data);
};

/** Updates an existing Entity Model definition. */
export function update(data: EntityModel): Promise<EntityModel> {
	return Promise.resolve(data);
}

/** Deletes a Entity Model definition. */
export function destroy(options: { id: string, reason: string }): Promise<{ deleted: boolean, message?: string }> {
	return Promise.resolve({ deleted: true, message: `Deleted ${options.id}` });
}