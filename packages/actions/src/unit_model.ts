/**
 * @module @kitledger/actions/unitModel
 * Provides functions to create, read, update, and delete Unit Model definitions.
 */

/**
 * The complete definition of a Unit Model archetype.
 */
export interface UnitModelDefinition {
    /** The primary, user-defined unique identifier for the model (e.g., 'kg'). */
    ref_id: string;
    /** An optional secondary identifier. */
    alt_id?: string;
    /** The human-readable name of the model (e.g., 'Kilogram'). */
    name: string;
    /** For derived units, the refId of the unit it is based on (e.g., 'g' might have a base unit of 'kg'). */
    base_unit_id?: string;
    /** Whether the model is currently active. */
    active?: boolean;
}

/** Creates a new Unit Model definition. */
export declare function create(definition: Omit<UnitModelDefinition, 'active'>): Promise<UnitModelDefinition>;

/** Retrieves an existing Unit Model definition by its ref_id. */
export declare function get(options: { ref_id:string }): Promise<UnitModelDefinition>;

/** Updates an existing Unit Model definition. */
export declare function update(options: { ref_id: string; data: Partial<UnitModelDefinition> }): Promise<UnitModelDefinition>;

/** Deletes a Unit Model definition. */
export declare function del(options: { ref_id: string }): Promise<void>;