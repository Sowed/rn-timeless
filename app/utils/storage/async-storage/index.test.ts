import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import { loadData, loadString, saveData, saveString, clear, remove } from '.';

// fixtures
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);

beforeEach(() =>
  (AsyncStorage.getItem as jest.Mock).mockReturnValue(
    Promise.resolve(VALUE_STRING)
  )
);

afterEach(() => jest.clearAllMocks());

test('loadData', async () => {
  const value = await loadData('something');
  expect(value).toEqual(JSON.parse(VALUE_STRING));
});

test('loadString', async () => {
  const value = await loadString('something');
  if (value) expect(base64.decode(value)).toEqual(VALUE_STRING);
  else expect(value).toEqual(null);
});

test('saveData', async () => {
  await saveData('something', VALUE_OBJECT);
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(
    'something',
    base64.encode(VALUE_STRING)
  );
});

test('saveString', async () => {
  await saveString('something', VALUE_STRING);
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(
    'something',
    base64.encode(VALUE_STRING)
  );
});

test('remove', async () => {
  await remove('something');
  expect(AsyncStorage.removeItem).toHaveBeenCalledWith('something');
});

test('clear', async () => {
  await clear();
  expect(AsyncStorage.clear).toHaveBeenCalledWith();
});
