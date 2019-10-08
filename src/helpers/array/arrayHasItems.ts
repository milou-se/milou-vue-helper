export function ArrayHasItems(arr: unknown[]): boolean {
    return Array.isArray(arr) && arr.length >= 1;
}
