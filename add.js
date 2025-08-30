/**
 * Adds numbers from a string.
 *
 * @param {string} numbersString - A string of comma-separated numbers (e.g., "1,2,3").
 * @returns {number} The sum of the numbers. Returns 0 if the input string is empty.
 *
 * @example
 * add("");      // 0
 * add("1");     // 1
 * add("1,5");   // 6
 * add("1\n2,3"); // 6
 */

function add(numbersString)  {
    if (numbersString === "") return 0;
    
    const DELIMITERS = /[,\n]/;
    const numbers = numbersString.split(DELIMITERS);
    return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;