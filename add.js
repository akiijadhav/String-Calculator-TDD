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
 * add("//*\n1*2*3"); // 6
 * add("//()\n1(2(3"); // 6
 * add("1,-2,3"); // throws Error: "negative numbers not allowed -2"
 * add("1,-2,3,-4"); // throws Error: "negative numbers not allowed -2,-4"
 */

// function to add numbers from a string
function add(numbersString) {
    // Return 0 for empty string
    if (numbersString === "") return 0;

    // Initialize default delimiters
    let delimiters = [",", "\n"];
    let numbersPart = numbersString;

    // Handle custom delimiter format: //[delimiter]\n[numbers]
    if (numbersString.startsWith("//")) {
        const parts = numbersString.split("\n", 2);
        const customDelimiter = parts[0].substring(2);

        // Create character class for custom delimiter
        const escapedChars = customDelimiter.split('').map(char =>
            char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        ).join('');

        delimiters.push(`[${escapedChars}]`);
        numbersPart = parts[1];
    }

    // Create regex pattern and split numbers
    const delimiterRegex = new RegExp(delimiters.join("|"));
    const numbers = numbersPart
        .split(delimiterRegex)
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));

    // Check for negative numbers and throw error if found
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    // Return the sum of all numbers
    return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;