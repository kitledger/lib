import * as v from 'valibot';

// --- Base Filter Schemas ---
const BaseFilterSchema = v.object({
    field: v.string(),
});

const ArrayValueFilterSchema = v.intersect([
    BaseFilterSchema,
    v.object({
        operator: v.union([v.literal('in'), v.literal('not_in')]),
        value: v.array(v.union([v.string(), v.number(), v.boolean()])),
    }),
]);

const DateValueFilterSchema = v.intersect([
    BaseFilterSchema,
    v.object({
        operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('gt'), v.literal('gtequal'), v.literal('lt'), v.literal('ltequal'), v.literal('empty'), v.literal('not_empty')]),
        value: v.pipe(v.string(), v.isoDateTime())
    }),
]);

const NumericValueFilterSchema = v.intersect([
	BaseFilterSchema,
	v.object({
		operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('gt'), v.literal('gtequal'), v.literal('lt'), v.literal('ltequal'), v.literal('empty'), v.literal('not_empty')]),
		value: v.union([v.number(), v.boolean()]),
	}),
]);

const TextValueFilterSchema = v.intersect([
	BaseFilterSchema,
	v.object({
		operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('contains'), v.literal('empty'), v.literal('like'), v.literal('not_empty'), v.literal('starts_with'), v.literal('ends_with')]),
		value: v.union([v.string(), v.boolean()]),
	}),
]);

export const FilterSchema = v.union([
    ArrayValueFilterSchema,
    DateValueFilterSchema,
    NumericValueFilterSchema,
	TextValueFilterSchema,
]);

export const FilterGroupSchema: v.GenericSchema<FilterGroup> = v.lazy(() =>
    v.object({
        operator: v.union([v.literal('and'), v.literal('or')]),
        conditions: v.array(v.union([FilterSchema, FilterGroupSchema])),
    })
);

export const SimpleColumnSchema = v.object({
    field: v.string(),
    label: v.optional(v.string()),
});

export const AggregateColumnSchema = v.object({
    func: v.union([ v.literal('sum'), v.literal('avg'), v.literal('count'), v.literal('min'), v.literal('max')]),
    field: v.string(),
    label: v.string(),
});

export const ColumnSchema = v.union([
    v.string(),
    SimpleColumnSchema,
    AggregateColumnSchema,
]);

export const SortSchema = v.object({
    field: v.string(),
    direction: v.union([v.literal('asc'), v.literal('desc')]),
});

export const QueryOptionsSchema = v.object({
    filters: v.array(FilterGroupSchema),
    columns: v.array(ColumnSchema),
    sorts: v.optional(v.array(SortSchema)),
    groupBy: v.optional(v.array(v.string())),
    limit: v.optional(v.pipe(
		v.number(),
		v.integer(),
		v.minValue(1),
		v.maxValue(1000)
	)),
    offset: v.optional(v.pipe(
		v.number(),
		v.integer(),
		v.minValue(0)
	)),
});

export type FilterGroup = {
    operator: 'and' | 'or';
    conditions: (v.InferOutput<typeof FilterSchema> | FilterGroup)[];
};
export type Filter = v.InferInput<typeof FilterSchema>;
export type Column = v.InferInput<typeof ColumnSchema>;
export type Sort = v.InferInput<typeof SortSchema>;
export type QueryOptions = v.InferInput<typeof QueryOptionsSchema>;