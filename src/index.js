/**
 * Determines if a string is a valid username
 * @param {string} string
 * @returns {boolean}
*/
// eslint-disable-next-line import/prefer-default-export
export function isUsername(string) {
    return /^[^@#:\s][^@#:]{0,30}[^@#:\s](?<!^(?:everyone|here)|.*(?:```|discord).*)$/s.test(string);
}
