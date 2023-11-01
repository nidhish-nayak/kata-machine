export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let value = false;
    haystack.map((i) => {
        if (i === needle) {
            value = true;
            return;
        } else return;
    });
    return value;
}
