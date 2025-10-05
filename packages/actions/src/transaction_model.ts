/**
 * @module @kitledger/actions/transactionModel
 * Provides functions to create, read, update, and delete Transaction Model definitions.
 */

/**
 * The complete definition of a Transaction Model archetype.
 */
export interface TransactionModelDefinition {
    /** The primary, user-defined unique identifier for the model (e.g., 'invoice'). */
    ref_id: string;
    /** An optional secondary identifier. */
    alt_id?: string;
    /** The human-readable name of the model (e.g., 'Invoice'). */
    name: string;
    /** Whether the model is currently active and can be used to post new transactions. */
    active?: boolean;
}

/** Creates a new Transaction Model definition. */
export declare function create(definition: Omit<TransactionModelDefinition, 'active'>): Promise<TransactionModelDefinition>;

/** Retrieves an existing Transaction Model definition by its ref_id. */
export declare function get(options: { ref_id: string }): Promise<TransactionModelDefinition>;

/** Updates an existing Transaction Model definition. */
export declare function update(options: { ref_id: string; data: Partial<TransactionModelDefinition> }): Promise<TransactionModelDefinition>;

/** Deletes a Transaction Model definition. */
export declare function del(options: { ref_id: string }): Promise<void>;