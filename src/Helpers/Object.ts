/**
 * @file
 * @author Andrew Hathaway
 */

export type Diff<T extends string, U extends string> = ({
  [P in T]: P
} & { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export const pick = <T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> => {
  const newObject = {} as Pick<T, K>;
  keys.forEach(k =>
    newObject[k] = object[k]);

  return newObject;
};
