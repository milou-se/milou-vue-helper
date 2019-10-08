export function ObjectsAreEqual(obj1: any, obj2: any) {
    for (const p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
            return false;
        }

        switch (typeof obj1[p]) {
            case 'object':
                if (!ObjectsAreEqual(obj1[p], obj2[p])) {
                    return false;
                }
                break;
            case 'function':
                if (typeof obj2[p] === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())) {
                    return false;
                }
                break;
            default:
                if (obj1[p] !== obj2[p]) {
                    return false;
                }
        }
    }

    for (const p in obj2) {
        if (typeof obj1[p] === 'undefined') {
            return false;
        }
    }
    return true;
}
