/**
 * Expose Drops features here, that will be consumed by screens or features.
 * 
 * - Note: Organize the smaller components specific to this feature here first,
 *   until they are used by some other components to refactor them to the
 *   app-wide modal component.
 */

// NOTE: These 2 features might not need to be exposed at all.
// But for now, this an example of how to expose features.
export { default as DropsList } from './containers/DropsList';
export { default as DropsFilterSlider } from './containers/DropsFilterSlider';

export { default as Drops } from './containers/DropsPage';
