/**
 * @file This file declares the global `kit` object, providing a fully
 * type-safe API for developers writing Kit Action scripts.
 */

import * as log from './log.js';
import * as http from './http.js';

/**
 * Defines the complete shape of the globally available `kit` API object.
 */
interface KitActionsApi {
    log: typeof log;
    http: typeof http;
}

/**
 * Uses TypeScript's declaration merging to add `kit` to the global scope.
 */
declare global {
  const kit: KitActionsApi;
}

export type { KitActionsApi };