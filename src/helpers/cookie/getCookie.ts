export function GetCookie(name: string): string | null {
    let cookieValue: string | null = null;
    if (document.cookie) {
        const arr: string[] = document.cookie.split(escape(name) + '=');
        if (2 <= arr.length) {
            const arr2: string[] = arr[1].split(';');
            cookieValue = unescape(arr2[0]);
        }
    }
    return cookieValue;
}
