export function StripHTML(str: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || '';
}
