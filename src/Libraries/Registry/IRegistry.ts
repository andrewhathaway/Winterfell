/**
 * @file IRegistry Interface
 * @author Andrew Hathaway
 */
interface IRegistry<T = any> {
  add<T>(key: string, item: T, force?: boolean): IRegistry<T>;

  get<T>(key: string): T;
}
