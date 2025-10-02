import { KitActions } from './index.ts';

declare global {
  /**
   * The Kit API provides access to host functions for interacting
   * with your application's services.
   */
  const kit: KitActions;
}