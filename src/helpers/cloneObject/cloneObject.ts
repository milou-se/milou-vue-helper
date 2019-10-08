export function CloneObject(object: any) {
    return JSON.parse(JSON.stringify(object));
}
