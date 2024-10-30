export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0,
        right = haystack.length;
    do {
        const mid = ~~((left + right) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            right = mid;
        } else {
            left = mid + 1;
        }
    } while (left < right);
    return false;
}
