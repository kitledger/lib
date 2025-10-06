/**
 * @module @kitledger/actions/common
 * Exports shared types and interfaces used across multiple Kit Ledger API modules,
 * particularly for querying data.
 */

/** A base interface for a single filter condition. */
interface BaseFilter {
    field: string;
}

/** A filter condition that accepts an array of values. */
interface ArrayValueFilter extends BaseFilter {
    operator: 'in' | 'not_in';
    value: string[] | number[] | boolean[];
}

/** A filter condition that accepts a single numeric valye */
interface NumericValueFilter extends BaseFilter {
	operator: 'equal' | 'not_equal' | 'gt' | 'gtequal' | 'lt' | 'ltequal' | 'empty' | 'not_empty';
	value: number | boolean;
}

/** A filter condition that accepts a single text value. */
interface TextValueFilter extends BaseFilter {
    operator: 'equal' | 'not_equal' | 'contains' | 'empty' | 'like' | 'not_empty' | 'starts_with' | 'ends_with';
    value: string | boolean;
}

/**
 * A discriminated union that strictly types the filter as a self-descriptive object.
 * The `value`'s type is validated against the `operator`.
 */
export type Filter = ArrayValueFilter | NumericValueFilter | TextValueFilter;

/**
 * Defines a single sort condition as a self-descriptive object.
 */
export type Sort = {
    field: string;
    direction: 'asc' | 'desc';
};

/**
 * Represents a single record returned from a query.
 * It's a flexible object with an always-present `internalId`.
 */
export type QueryResult = Record<string, any> & {
    /** The internal unique ID of the record. */
    internalId: string;
};

/**
 * A comprehensive options object for building and executing a query.
 */
export interface QueryOptions {
    /**
     * An array of filter conditions.
     * Use a nested array for OR conditions. Multiple top-level filters are joined by AND.
     */
    filters: (Filter | Filter[])[];
    /** An array of field `ref_id`s to return in the results. */
    columns: string[];
    /** An optional array of sort conditions to apply. */
    sorts?: Sort[];
    /** The number of results to return (defaults to 50, max 1000). */
    limit?: number;
    /** The result offset for pagination (defaults to 0). */
    offset?: number;
}