import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest"

describe.each([
	{
		input: "  hello  world  ",
		expected: ["hello", "world"],
	},
	// TODO: more tests
])("cleanInput($input)", ({ input, expected }) => {
	test(`Expected: ${expected}`, () => {
		// TODO: call cleanInput with input here
		var actual = cleanInput(input);
		
		expect(actual).toHaveLength(expected.length);
		for (const i in expected) {
			expect(actual[i]).toBe(expected[i]);
		}
	});
});
