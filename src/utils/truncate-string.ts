type TruncateStringOptions = Readonly<{
    limit: number;
    suffix: string;
}>;

const DEFAULT_OPTIONS: TruncateStringOptions = {
    limit: 10,
    suffix: "...",
};

export function truncateString(
    stringToTruncate: string,
    options: TruncateStringOptions = DEFAULT_OPTIONS
) {
    if (options.limit < 0) {
        throw new RangeError("limit must be greater than 0");
    }

    if (stringToTruncate.length <= options.limit) {
        return stringToTruncate;
    }

    return stringToTruncate.slice(0, options.limit) + options.suffix;
}

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
