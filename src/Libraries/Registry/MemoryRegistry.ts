/**
 * @file In Memory key-value store
 * @author Andrew Hathaway
 */
class MemoryRegistry<T = any> implements IRegistry<T> {
  private registryItems: {
    [key: string]: any;
  } = {};
  /**
   * @param  {string} key
   * @param  {T} item
   * @returns IRegistry
   */
  public add = <T>(key: string, item: T, force: boolean = false): IRegistry => {
    // If we already have the item and it wasn't forced, then error
    if (typeof this.registryItems[key] !== 'undefined' && !force) {
      throw new Error(`Registry: Item "${key}" aleady exists`);
    }

    // Add the item to our store
    this.registryItems[key] = item;
    return this;
  }

  /**
   * @param  {string} key
   * @returns T
   */
  public get = <T>(key: string): T => {
    // If we don't have the item, throw an error
    if (typeof this.registryItems[key] === 'undefined') {
      throw new Error(`Registry: Item "${key}" not found`);
    }

    // Return the type as the
    return <T>this.registryItems[key];
  }
}

export default MemoryRegistry;
