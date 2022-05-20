import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import { loadData, loadString, saveData, saveString, clear, remove } from '.';

/**
 * Sample value to test with.
 */
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);
const TEST_KEY_FOR_STRING = '@storage/async-storage/tests';

describe('\n\n🧪 Testing: @utils/storage/async-storage helpers -----\n', () => {
  afterEach(() => jest.clearAllMocks());

  test('saveString: Saves a string value data to async storage.', async () => {
    await saveString(TEST_KEY_FOR_STRING, VALUE_STRING);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      TEST_KEY_FOR_STRING,
      base64.encode(VALUE_STRING),
    );
  });

  test('loadString: Retrieves a string value from async storage', async () => {
    (AsyncStorage.getItem as jest.Mock).mockReturnValue(
      Promise.resolve(base64.encode(VALUE_STRING)),
    );

    const value = await loadString(TEST_KEY_FOR_STRING);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(TEST_KEY_FOR_STRING);

    if (value) {
      expect(value).toEqual(VALUE_STRING);
    }

    else expect(value).toEqual(null);
  });

  test('saveData: Saves object data to async storage.', async () => {
    await saveData(TEST_KEY_FOR_STRING, VALUE_OBJECT);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      TEST_KEY_FOR_STRING,
      base64.encode(VALUE_STRING),
    );
  });

  test('loadData: Retrieves object data from async storage.', async () => {
    (AsyncStorage.getItem as jest.Mock).mockReturnValue(
      Promise.resolve(base64.encode(VALUE_STRING)),
    );
    const value = await loadData(TEST_KEY_FOR_STRING);

    expect(AsyncStorage.getItem).toHaveBeenCalledWith(TEST_KEY_FOR_STRING);

    if (value) {
      expect(value).toEqual(VALUE_OBJECT);
    }
    else expect(value).toEqual(null);
  });

  test('remove: Removes an item from async storage', async () => {
    await remove(TEST_KEY_FOR_STRING);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(TEST_KEY_FOR_STRING);
  });

  test('clear: Clears all the content of async storage', async () => {
    await clear();
    expect(AsyncStorage.clear).toHaveBeenCalledWith();
  });

});
