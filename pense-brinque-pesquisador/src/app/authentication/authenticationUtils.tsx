'use client';

/**
 * Gets a value from localstorage.
 *
 * @throws - Localstorage is not defined.
 * @param itemKey
 * @returns value get from localstorage.
 */
export const localStorageGetItem = (itemKey: string): string | undefined => {
  let value: string | undefined;
  try {
    value = localStorage.getItem(itemKey) ?? undefined;
  } catch (error) {
    console.log('[Localstorage Get Item Error]', error);
    throw error;
  }
  return value;
};

/**
 * Sets a value in localstorage.
 *
 * @throws - Localstorage is not defined.
 * @param itemKey
 * @param value
 */
export const localStorageSetItem = (itemKey: string, value: string): void => {
  try {
    localStorage.setItem(itemKey, value);
  } catch (error) {
    console.log('[Localstorage Set Item Error]', error);
    throw error;
  }
};

/**
 * Removes a key and its value from localstorage.
 *
 * @throws - Localstorage is not defined.
 * @param itemKey
 */
export const localStorageRemoveItem = (itemKey: string): void => {
  try {
    localStorage.removeItem(itemKey);
  } catch (error) {
    console.log('[Localstorage Remove Item Error]', error);
    throw error;
  }
};
