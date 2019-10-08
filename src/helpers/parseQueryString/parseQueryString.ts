export function ParseQueryString(url?: string): any {
    const defaultUrl = document.location ? document.location.search : '';
    url = url || defaultUrl;
    const urlParams: any = {};
    if (url) {
        url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0: string, $1: string, $2: string, $3: string): any => {
            urlParams[$1] = $3;
        });
    }

    return urlParams;
}
