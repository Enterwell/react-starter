// Import service
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '@/services/LocalStorageService';

/**
 * Class representing the Local Storage mock.
 */
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

/**
 * Local storage service unit tests.
 */
describe('Local storage service unit tests', () => {
  /**
   * Runs before all unit tests.
   */
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock(), writable: true });
  });

  /**
   * Testing that the local storage service correctly fetches the property value for a given
   * key and deserializes it.
   */
  it('Correctly returns value for a given key', () => {
    // Arrange
    const storingKey = 'key';
    const storingValue = { name: 'John Doe', age: 28 };

    window.localStorage.setItem(storingKey, JSON.stringify(storingValue));

    // Act
    const result = getLocalStorageItem(storingKey);

    // Assert
    expect(typeof result).toBe('object');
    expect(result).toStrictEqual(storingValue);
  });

  /**
   * Testing that the local storage service returns 'null' if the local storage is undefined.
   */
  it('Returns \'null\' if the local storage is undefined', () => {
    // Arrange
    const storingKey = 'key';

    // Making the local storage undefined
    Object.defineProperty(window, 'localStorage', { value: undefined });

    // Act
    const result = getLocalStorageItem(storingKey);

    // Setting back the local storage mock
    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });

    // Assert
    expect(result).toBeNull();
  });

  /**
   * Testing that the local storage service correctly stores the given value under the given key
   * by serializing it to JSON string.
   */
  it('Correctly stores the given value', () => {
    // Arrange
    const storingKey = 'key';
    const storingValue = { name: 'John Doe', age: 28 };

    const expectedValue = JSON.stringify(storingValue);

    // Act
    setLocalStorageItem(storingKey, storingValue);

    const result = window.localStorage.getItem(storingKey);

    // Assert
    expect(typeof result).toBe('string');
    expect(result).toBe(expectedValue);
  });

  /**
   * Testing that the local storage service does not store the given
   * value if the local storage is undefined.
   * The service should not throw because accessing undefined.
   */
  it('Does not store if the local storage is undefined', () => {
    // Arrange
    const storingKey = 'key';
    const storingValue = { name: 'John Doe', age: 28 };

    // Making the local storage undefined
    Object.defineProperty(window, 'localStorage', { value: undefined });

    // Act
    setLocalStorageItem(storingKey, storingValue);

    // Assert
    expect(window.localStorage).toBeUndefined();

    // Setting back the local storage mock
    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  });

  /**
   * Testing that the local storage service correctly removes the property by its given key
   * from local storage.
   */
  it('Correctly removes value for a given key', () => {
    // Arrange
    const storingKey = 'key';
    const storingValue = { name: 'John Doe', age: 28 };

    window.localStorage.setItem(storingKey, storingValue);

    // Act
    removeLocalStorageItem(storingKey);

    const result = window.localStorage.getItem(storingKey);

    // Assert
    expect(result).toBeNull();
  });
});
