export function FloatToString(float: number, decimals: number): string {
    const expression: unknown = float + 'e+' + decimals;
    const decimalFix = +(Math.round(expression as number) + 'e-' + decimals);
    return decimalFix.toString().replace('.', ',');
}
