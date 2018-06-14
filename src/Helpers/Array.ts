/**
 * @file
 * @author Andrew Hathaway
 */

/**
 * @param  {T[]} array
 * @param  {(item: T, index: number)=>string | number} getKey
 * @param  {(item: T, index: number)=>V} getValue
 * @returns any
 */
export const toObject = <T, V>(
  array: T[],
  getKey: (item: T, index: number) => string | number,
  getValue: (item: T, index: number) => V
): {
  [keyName: string]: V;
  [keyName: number]: V;
} => {
  const object = {};

  array.forEach((v, i) =>
    object[getKey(v, i)] = getValue(v, i));

  return object;
};
