export function Capitalize(value: string) {
    if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return '';
}
