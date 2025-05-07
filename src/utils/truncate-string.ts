type TruncateStringOptions = Readonly<{
    /**
     * The maximum length of the string before truncation.
     * It should be greater than 0 or the function will throw an error.
     * @defaultValue 10
     */
    limit: number;

    /**
     * The suffix to append to the truncated string.
     * @defaultValue "..."
     */
    suffix: string;
}>;

const DEFAULT_OPTIONS: TruncateStringOptions = {
    limit: 10,
    suffix: "...",
};

/**
 * Truncates a string to a specified length and appends a suffix if the string exceeds that length.
 * This is naive implementation, it always cuts string at 100'th char and that doesn't always look good.
 *
 *
 * @param stringToTruncate - The string to truncate.
 * @param options - An object containing the limit and suffix.
 * @throws `RangeError` if the limit is less than 0.
 * @returns The truncated string with the suffix appended.
 */
export function truncateString(
    stringToTruncate: string,
    options: TruncateStringOptions = DEFAULT_OPTIONS
): string {
    if (options.limit < 0) {
        throw new RangeError("limit must be greater than 0");
    }

    if (stringToTruncate.length <= options.limit) {
        return stringToTruncate;
    }

    return stringToTruncate.slice(0, options.limit) + options.suffix;
}

/**
 * Truncates a string to a specified length and appends a suffix if the string exceeds that length.
 * This is a more advanced implementation that truncates the string at the last whitespace before the limit.
 * it's useful for truncating sentences or paragraphs without cutting words in half.
 *
 * @param stringToTruncate - The string to truncate.
 * @param options - An object containing the limit and suffix.
 * @throws `RangeError` if the limit is less than 0.
 * @returns The truncated string with the suffix appended.
 */
export function truncateStringAtWhitespace(
    stringToTruncate: string,
    options: TruncateStringOptions = DEFAULT_OPTIONS
) {
    if (options.limit < 0) {
        throw new RangeError("limit must be greater than 0");
    }

    if (stringToTruncate.length <= options.limit) {
        return stringToTruncate;
    }

    const lastSpace = stringToTruncate.slice(0, options.limit).lastIndexOf(" ");

    return stringToTruncate.slice(0, lastSpace > 0 ? lastSpace : options.limit) + options.suffix;
}
