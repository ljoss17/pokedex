import { Cache } from "./pokecache.js";
import { describe, expect, test, beforeEach, afterEach, vi } from "vitest";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe.each([
	{},
	// TODO: more tests
])("Simple 5 second cache", ({}) => {
	test("expires entries", async () => {
		const cache = new Cache(5);

		expect(cache.get("key1")).toBe(undefined);

		cache.add("key1", 5);
		expect(cache.get("key1")).toBe(5);

		vi.advanceTimersByTime(5100);
		expect(cache.get("key1")).toBe(undefined);
	});
});	
