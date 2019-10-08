export function ObjectToQuery(data: any): string {
    if (typeof data === 'string') {
        return data;
    }
    const query = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
    }
    return query.join('&');
}
