import * as v from 'valibot';

// --- Base Filter Schemas ---
const BaseConditionSchema = v.object({
    column: v.string(),
});

const ArrayValueConditionSchema = v.intersect([
    BaseConditionSchema,
    v.object({
        operator: v.union([v.literal('in'), v.literal('not_in')]),
        value: v.array(v.union([v.string(), v.number(), v.boolean()])),
    }),
]);

const DateValueConditionSchema = v.intersect([
    BaseConditionSchema,
    v.object({
        operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('gt'), v.literal('gtequal'), v.literal('lt'), v.literal('ltequal'), v.literal('empty'), v.literal('not_empty')]),
        value: v.pipe(v.string(), v.isoDateTime())
    }),
]);

const NumericValueConditionSchema = v.intersect([
	BaseConditionSchema,
	v.object({
		operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('gt'), v.literal('gtequal'), v.literal('lt'), v.literal('ltequal'), v.literal('empty'), v.literal('not_empty')]),
		value: v.union([v.number(), v.boolean()]),
	}),
]);

const TextValueConditionSchema = v.intersect([
	BaseConditionSchema,
	v.object({
		operator: v.union([ v.literal('equal'), v.literal('not_equal'), v.literal('contains'), v.literal('empty'), v.literal('like'), v.literal('not_empty'), v.literal('starts_with'), v.literal('ends_with')]),
		value: v.union([v.string(), v.boolean()]),
	}),
]);

export const ConditionSchema = v.union([
    ArrayValueConditionSchema,
    DateValueConditionSchema,
    NumericValueConditionSchema,
	TextValueConditionSchema,
]);

export const ConditionGroupSchema: v.GenericSchema<ConditionGroup> = v.lazy(() =>
    v.object({
        operator: v.union([v.literal('and'), v.literal('or')]),
        conditions: v.array(v.union([ConditionSchema, ConditionGroupSchema])),
    })
);

export const SimpleColumnSchema = v.object({
    column: v.string(),
    as: v.optional(v.string()),
});

export const AggregateColumnSchema = v.object({
    func: v.union([ v.literal('sum'), v.literal('avg'), v.literal('count'), v.literal('min'), v.literal('max')]),
    column: v.string(),
    as: v.string(),
});

export const ColumnSchema = v.union([
    v.string(),
    SimpleColumnSchema,
    AggregateColumnSchema,
]);

export const OrderSchema = v.object({
    column: v.string(),
    direction: v.union([v.literal('asc'), v.literal('desc')]),
});

export const QuerySchema = v.object({
    select: v.array(ColumnSchema),
	where: v.array(ConditionGroupSchema),
    orderBy: v.optional(v.array(OrderSchema)),
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

export type ConditionGroup = {
    operator: 'and' | 'or';
    conditions: (v.InferOutput<typeof ConditionSchema> | ConditionGroup)[];
};
export type Condition = v.InferInput<typeof ConditionSchema>;
export type Column = v.InferInput<typeof ColumnSchema>;
export type Order = v.InferInput<typeof OrderSchema>;
export type Query = v.InferInput<typeof QuerySchema>;