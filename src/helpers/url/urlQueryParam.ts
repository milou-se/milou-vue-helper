export function UrlQueryParam(field: string, url: string): string {
    const href = url ? url : window.location.href;
    const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    const str = reg.exec(href);
    return str ? str[1] : '';
}
