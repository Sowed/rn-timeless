import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import errorLogger, { ErrorEventsEnum } from '@services/error-logger';

/**
 * -----------------------------------------------------------------------------
 * Retrieves the previously saved `base64 encrypted` string value from
 * async-storage, `decodes` it and returns the actual value.
 *
 * - Return a promise that resolves the promise to `null` if the key is not
 * found or if app fails to access async storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    const encodedValue = await AsyncStorage.getItem(key);

    if (encodedValue) {
      return base64.decode(encodedValue);
    }

    return null;
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `loadString()`',
    });

    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * -----------------------------------------------------------------------------
 * Encrypts (base64) a `string` and saves it to async storage.
 *
 * - Returns a `boolean` to indicate whether it was saved successfully or failed.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    const encodedValue = base64.encode(value);

    await AsyncStorage.setItem(key, encodedValue);

    return true;
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `saveString()`',
    });

    return false;
  }
}

/**
 * -----------------------------------------------------------------------------
 * Loads something from async storage and runs it through `JSON.parse`.
 *
 * - Note: Use this if you are retrieving an object,
 * otherwise use `loadString(key)` for strings.
 *
 * - Return a promise that resolves the promise to `null` if the key is not
 * found or if app fails to access async storage.
 *
 * @param key The key to fetch.
 */
export async function loadData<T>(key: string): Promise<T | null> {
  try {
    const encodedRawData = (await AsyncStorage.getItem(key)) || '';

    if (encodedRawData) {
      return JSON.parse(base64.decode(encodedRawData));
    }

    return null;
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `loadData()`',
    });

    return null;
  }
}

/**
 * -----------------------------------------------------------------------------
 * Encrypts (base64) the stringified object and saves it to async storage.
 *
 * - Returns a `boolean` to indicate whether it was saved successfully or failed.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveData(key: string, value: any): Promise<boolean> {
  try {
    const encodedValue = base64.encode(JSON.stringify(value));
    await AsyncStorage.setItem(key, encodedValue);
    return true;
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `saveData()`',
    });

    return false;
  }
}

/**
 * -----------------------------------------------------------------------------
 * Removes something from async storage.
 *
 * - Returns a `boolean` to indicate whether it was removed successfully or not.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `remove()`',
    });

    return false;
  }
}

/**
 * -----------------------------------------------------------------------------
 * 🔥 Burn it all to the ground. This wipes every item saved in async storage.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    errorLogger({
      error: error as Error,
      errorCode: ErrorEventsEnum.ERROR_IN_ASYNC_STORAGE,
      message: 'Error in `clear()`',
    });
  }
}
