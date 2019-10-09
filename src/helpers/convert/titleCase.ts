export function TitleCase(str: string): string {
    if (!str) {
        return '';
    }
    const strArr: string[] = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
}
