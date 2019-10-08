export function UrlParamsToArray(params: string) {
    const request: any[] = [];
    const pairs: string[] = params.split('&');
    pairs.forEach((item: any, index: number) => {
        if (item) {
            const pair = item.split('=');
            const pairObject: any = {};
            pairObject['name'] = decodeURIComponent(pair[0]);
            pairObject['value'] = decodeURIComponent(pair[1]);
            request.push(pairObject);
        }
    });
    return request;
}
