export function ObjectClone(object: any) {
    return JSON.parse(JSON.stringify(object));
}
