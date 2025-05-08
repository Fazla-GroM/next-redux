import { describe, expect, it } from "vitest";

import { truncateString, truncateStringAtWhitespace } from "./truncate-string";

describe("truncateString", () => {
    it("should throw a RangeError if the limit is less than 0", () => {
        const stringToTest = "Hello, world!";
        const limit = -5;
        const suffix = "...";

        expect(() => truncateString(stringToTest, { limit, suffix })).toThrow(RangeError);
    });

    it("should not truncate if the string is shorter than the limit", () => {
        const stringToTest = "Hello, world!";
        const limit = 20;
        const suffix = "...";
        const result = truncateString(stringToTest, { limit, suffix });

        expect(result).toBe(stringToTest);
    });

    it("should truncate a string to a specified limit", () => {
        const stringToTest = "Hello, world!";
        const limit = 5;
        const suffix = "...";
        const result = truncateString(stringToTest, { limit, suffix });

        expect(result).toBe("Hello...");
    });

    it("should handle empty strings", () => {
        const stringToTest = "";
        const limit = 5;
        const suffix = "...";
        const result = truncateString(stringToTest, { limit, suffix });

        expect(result).toBe(stringToTest);
    });
});

describe("truncateStringAtWhitespace", () => {
    it("should throw a RangeError if the limit is less than 0", () => {
        const stringToTest = "Hello, world!";
        const limit = -5;
        const suffix = "...";

        expect(() => truncateStringAtWhitespace(stringToTest, { limit, suffix })).toThrow(
            RangeError
        );
    });

    it("should not truncate if the string is shorter than the limit", () => {
        const stringToTest = "Hello, world!";
        const limit = 20;
        const suffix = "...";
        const result = truncateStringAtWhitespace(stringToTest, { limit, suffix });

        expect(result).toBe(stringToTest);
    });

    it("should truncate a string to a specified limit", () => {
        const stringToTest = "Hello, world!";
        const limit = 5;
        const suffix = "...";
        const result = truncateStringAtWhitespace(stringToTest, { limit, suffix });

        expect(result).toBe("Hello...");
    });

    it("should handle empty strings", () => {
        const stringToTest = "";
        const limit = 5;
        const suffix = "...";
        const result = truncateStringAtWhitespace(stringToTest, { limit, suffix });

        expect(result).toBe(stringToTest);
    });

    it("should truncate at the last whitespace before the limit", () => {
        const stringToTest = "Hello, world! This is a test.";
        const limit = 20;
        const suffix = "...";
        const result = truncateStringAtWhitespace(stringToTest, { limit, suffix });

        expect(result).toBe("Hello, world! This...");
    });
});
