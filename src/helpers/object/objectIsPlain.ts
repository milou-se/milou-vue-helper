export function ObjectIsPlain(obj: object): boolean {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
