/** Creates a new Transaction Model definition. */

export type TransactionModel = {
	id: string;
	name: string;
}

export function create(data: TransactionModel): Promise<TransactionModel> {
	return Promise.resolve(data);
};

/** Updates an existing Transaction Model definition. */
export function update(data: TransactionModel): Promise<TransactionModel> {
	return Promise.resolve(data);
}

/** Deletes a Transaction Model definition. */
export function destroy(options: { id: string, reason: string }): Promise<{ deleted: boolean, message?: string }> {
	return Promise.resolve({ deleted: true, message: `Deleted ${options.id}` });
}