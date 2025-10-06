/**
 * @module @kitledger/actions/common
 * Exports shared types and interfaces used across multiple Kit Ledger API modules,
 * particularly for querying data.
 */

// --- Base Filter Definitions ---

/** A base interface for a single filter condition. */
interface BaseFilter {
    field: string;
}

/** A filter condition that accepts an array of values. */
interface ArrayValueFilter extends BaseFilter {
    operator: 'in' | 'not_in';
    value: string[] | number[] | boolean[];
}

/** A filter condition that accepts ISO formatted dates */
interface DateValueFilter extends BaseFilter {
	operator: 'equal' | 'not_equal' | 'gt' | 'gtequal' | 'lt' | 'ltequal' | 'empty' | 'not_empty';
	value: string; // ISO date string
}

/** A filter condition that accepts a single numeric value. */
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
 * A discriminated union that strictly types a filter condition.
 */
export type Filter = ArrayValueFilter | DateValueFilter | NumericValueFilter | TextValueFilter;

/**
 * A group of filters or other filter groups joined by a logical operator.
 */
export type FilterGroup = {
    /** The logical operator to join the conditions. */
    operator: 'and' | 'or';
    /** An array of individual filters or nested filter groups. */
    conditions: (Filter | FilterGroup)[];
};


// --- Column Type Definitions ---

/**
 * Describes a simple column selection with an optional label for aliasing.
 */
export type SimpleColumn = {
    field: string;
    /** The display name for the column in the result set. */
    label?: string;
};

/**
 * Describes an aggregation to be performed on a column.
 */
export type AggregateColumn = {
    func: 'sum' | 'avg' | 'count' | 'min' | 'max';
    field: string;
    /** The mandatory display name for the aggregated column in the result set. */
    label: string;
};

/**
 * A union representing all possible ways to define a column in a query.
 */
export type Column = string | SimpleColumn | AggregateColumn;


// --- Main Query Options Interface ---

/**
 * Defines a single sort condition.
 */
export type Sort = {
    field: string;
    direction: 'asc' | 'desc';
};

/**
 * The definitive, comprehensive options object for building and executing a query.
 */
export interface QueryOptions {
    /**
     * An array of filter groups, explicitly defined with logical operators.
     */
    filters: FilterGroup[];

    /**
     * An array of columns to return, defined as a string or a structured object.
     */
    columns: Column[];

    /** An optional array of sort conditions to apply, processed in order. */
    sorts?: Sort[];

    /** An optional array of fields to group the results by for aggregation. */
    groupBy?: string[];

    /** The number of results to return (defaults to 50, max 1000). */
    limit?: number;

    /** The result offset for pagination (defaults to 0). */
    offset?: number;
}