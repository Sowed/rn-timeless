/**
 * -----------------------------------------------------------------------------
 * Defines sizing break points for the app.
 * Extend it to add more breakpoints or provide a custom implementation.
 * 
 * - Note: Could also be a function to allow for dynamic variables like the
 * `scaleFactor` for spacing variants
 */
export const breakpointsVariants = {
  phone: 0,
  longPhone: {
    width: 0,
    height: 812,
  },
  tablet: 768,
  largeTablet: 1024,
} as const;


export type BreakpointsVariantsType = keyof typeof breakpointsVariants;