export function StringToFloat(str: string): number {
    return parseFloat(str.replace(',', '.'));
}
