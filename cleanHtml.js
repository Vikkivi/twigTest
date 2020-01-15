/**
 * Clean HTML by deleting whitespaces
 * @param {string} html
 * @returns {string} HTML without whitespaces
 */
export default function cleanHtml(html) {
    return html.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
}