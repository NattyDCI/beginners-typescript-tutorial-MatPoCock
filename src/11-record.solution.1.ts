import { expect, it } from "vitest";
import { string } from "zod";

type StructureOfcache = {
  [index: string]: string;
}


const createCache = () => {
  const cache: Record<string, string> = {};//  Record is allowing us to add multiple
  //dinamic keys at runtime

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
