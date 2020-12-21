export function SetCookie(name: string, value: string, expires?: Date): void {
    let cookieText: string = escape(name) + '=' + escape(value);
    cookieText += expires ? '; EXPIRES=' + expires.toUTCString() : '';
    cookieText += '; PATH=/';
    document.cookie = cookieText;
}
