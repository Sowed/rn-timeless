type TObject<T> = Record<string, T>;

/**
 * -----------------------------------------------------------------------------
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * -----------------------------------------------------------------------------
 * Boolean function checking whether...iterator, object/array is not empty
 * @param obj, object to test for emptiness
 */
export function isEmpty<T>(
  obj: TObject<T> | string[] | number[] | null | undefined
) {
  if (obj !== undefined && obj !== null) {
    return Object.keys(obj).length === 0;
  }

  return true;
}

/**
 * -----------------------------------------------------------------------------
 * Function that removes all the null or undefined keys in an object returning
 * the cleaned up object.
 *
 * @param obj Object to test for emptiness
 */
export function removeEmptyKeys<T>(obj: TObject<T>) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // NOTE:  != unlike !== matches for both undefined and null
      ([_, value]) => value != null
    )
  );
}
