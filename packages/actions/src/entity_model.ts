/**
 * @module @kitledger/actions/entity_model
 * Provides functions to create, read, update, and delete Entity Model definitions.
 */

/**
 * The complete definition of an Entity Model archetype.
 */
export interface EntityModelDefinition {
    /** The primary, user-defined unique identifier for the model (e.g., 'customer'). */
    ref_id: string;
    /** An optional secondary identifier. */
    alt_id?: string;
    /** The human-readable name of the model (e.g., 'Customer'). */
    name: string;
    /** Whether the model is currently active and can be used to create new entities. */
    active?: boolean;
}

/** Creates a new Entity Model definition. */
export declare function create(definition: Omit<EntityModelDefinition, 'active'>): Promise<EntityModelDefinition>;

/** Retrieves an existing Entity Model definition by its ref_id. */
export declare function get(options: { ref_id: string }): Promise<EntityModelDefinition>;

/** Updates an existing Entity Model definition. */
export declare function update(options: { ref_id:string; data: Partial<EntityModelDefinition> }): Promise<EntityModelDefinition>;

/** Deletes an Entity Model definition. */
export declare function del(options: { ref_id: string }): Promise<void>;