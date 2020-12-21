export function Language(): string {
    const defaultLang: string = 'sv';
    const docEl: HTMLElement = document.documentElement;
    if (docEl && docEl.lang) {
        const lang: string[] = docEl.lang.split('-');
        return lang[0] || defaultLang;
    }
    return defaultLang;
}
