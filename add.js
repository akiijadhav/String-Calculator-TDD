/**
 * Adds numbers from a string.
 *
 * @param {string} numbersString - A string of comma-separated numbers (e.g., "1,2,3").
 * @returns {number} The sum of the numbers. Returns 0 if the input string is empty.
 * @throws {Error} When negative numbers are found in the input.
 *
 * @example
 * add("");      // 0
 * add("1");     // 1
 * add("1,5");   // 6
 * add("1\n2,3"); // 6
 * add("//;\n1;2"); // 3
 * add("1,-2,3"); // throws Error: "negative numbers not allowed -2"
 * add("1,-2,3,-4"); // throws Error: "negative numbers not allowed -2,-4"
 */

// function to add numbers from a string
function add(numbersString) {
    // return 0 for empty string
    if (numbersString === "") return 0;

    // create an array of delimiters
    let delimiters = [",", "\n"];
    // check for custom delimiter
    let numbersPart = numbersString;

    // check if the string starts with //
    if (numbersString.startsWith("//")) {
        // split the string into two parts: the first line and the numbers part i.e. rest
        const parts = numbersString.split("\n", 2)
        // extract the custom delimiter from the first line & push to delimiters array
        const customDelimiter = parts[0].substring(2);
        delimiters.push(customDelimiter);
        // remove the first line part
        numbersPart = parts[1];
    }

    // create a regex pattern to split string by multiple delimiters
    const delimiterRegex = new RegExp(delimiters.join("|"));
    // split the numbersPart by the delimiters and convert to array of numbers then filter out NaN values
    const numbers = numbersPart
        .split(delimiterRegex)
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));

    // Check for negative numbers & throw error if any found
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    // return the sum of the numbers
    return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;