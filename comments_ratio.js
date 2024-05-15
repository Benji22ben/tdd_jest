const fs = require("fs")

fs.readFile('./array_sort.test.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.toString().split("\n");

    const comments_ratio = calculateRatioOfComments(lines);
    const { number_of_parameters, number_of_returns, number_of_functions } = calculateIfParamAndReturnsAreThere(lines);

    console.log("Ratio of comments:", comments_ratio, "%");
    console.log("Number of parameters:", number_of_parameters);
    console.log("Number of returns:", number_of_returns);
    console.log("Number of functions:", number_of_functions);
    // console.log(data.match("/function\s+(\w+)\s*\(([\s\S]*?)\)\s*{"))
});

/**
 * Calculate if the @params and @returns are there and the number of functions
 * @param {string[]} lines 
 * @returns {Object}
 */
function calculateIfParamAndReturnsAreThere(lines) {
    let number_of_parameters = 0;
    let number_of_returns = 0;
    let number_of_functions = 0;

    for (let idx = 0; idx < lines.length; idx++) {
        const line = lines[idx];
        number_of_parameters += line.includes("@param") ? 1 : 0;
        number_of_returns += line.includes("@return") ? 1 : 0;
        number_of_functions += line.includes("function") && line.includes("(") ? 1 : 0;
    }

    return { number_of_parameters, number_of_returns, number_of_functions };
}

/**
 * Calculate the ratio of comments
 * @param {string[]} lines 
 * @returns {number}
 */
function calculateRatioOfComments(lines) {
    let started_comment_index = -1;
    let line_count = 0;
    let deleted_lines = 0;

    // Delete white spaces 
    deleted_lines = lines.filter(line => line.trim() === "").length;

    for (let idx = 0; idx < lines.length; idx++) {
        let line = lines[idx];

        /** When a comment is on one line */
        if (line.includes("/**") && line.includes("*/")) {
            line_count++;
            continue;
        }
        /** When a comment start */
        if (line.includes("/**") && !line.includes("*/") && started_comment_index === -1) {
            started_comment_index = idx;
            deleted_lines++;
        }

        /** When a comment ends */
        if (line.includes("*/") && started_comment_index !== -1) {
            line_count += idx - started_comment_index - 1;
            started_comment_index = -1;
            deleted_lines++;
        }
    };

    console.log("Remove deleted lines:", lines.length - deleted_lines);

    /** Calculate the ratio of comments (divide the line count by the real number of lines and multiply by 100) */
    const ratio = +((line_count / (lines.length - deleted_lines)) * 100).toFixed(2);

    console.log(line_count);

    return ratio;
}