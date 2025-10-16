/** Creates a new Unit Model definition. */

export type UnitModel = {
	id: string;
	name: string;
}

export function create(data: UnitModel): Promise<UnitModel> {
	return Promise.resolve(data);
};

/** Updates an existing Unit Model definition. */
export function update(data: UnitModel): Promise<UnitModel> {
	return Promise.resolve(data);
}

/** Deletes a Unit Model definition. */
export function destroy(options: { id: string, reason: string }): Promise<{ deleted: boolean, message?: string }> {
	return Promise.resolve({ deleted: true, message: `Deleted ${options.id}` });
}