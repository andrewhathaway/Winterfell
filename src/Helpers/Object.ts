/**
 * @file
 * @author Andrew Hathaway
 */
export const pick = <T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> => {
  const newObject = {} as Pick<T, K>;
  keys.forEach(k =>
    newObject[k] = object[k]);

  return newObject;
};
