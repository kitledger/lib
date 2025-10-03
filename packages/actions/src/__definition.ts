import { get, post, put, del } from './http.js';
import { debug, info, warn, error, audit, emergency } from './log.js';

/**
 * @internal
 * Defines the canonical shape of the KitActions API.
 */
export const ACTIONS_DEFINITION = {
    log: ['debug', 'info', 'warn', 'error', 'audit', 'emergency'],
    http: ['get', 'post', 'put', 'del'],
} as const;

type ApiDefinition = typeof ACTIONS_DEFINITION;
type Modules = keyof ApiDefinition;

/**
 * @internal
 * A union of all possible API method identifiers, e.g., "log.info" | "http.get".
 * This is generated dynamically from API_DEFINITION, ensuring a single source of truth.
 */
export type ApiMethod = {
  [M in Modules]: `${M}.${ApiDefinition[M][number]}`
}[Modules];

/**
 * @internal
 * A mapped type that defines the precise function signature for every API method
 * by referencing the declarations in the public-facing modules.
 */
export type ApiMethods = {
    'log.debug': typeof debug;
    'log.info': typeof info;
    'log.warn': typeof warn;
    'log.error': typeof error;
    'log.audit': typeof audit;
    'log.emergency': typeof emergency;
    'http.get': typeof get;
    'http.post': typeof post;
    'http.put': typeof put;
    'http.del': typeof del;
};