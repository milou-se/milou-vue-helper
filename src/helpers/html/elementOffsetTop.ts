export function ElementOffsetTop(elem: HTMLElement): number {
    let location = 0;
    if (elem.offsetParent) {
        while (elem) {
            location += elem.offsetTop;
            elem = elem.offsetParent as HTMLElement;
        }
    }
    return location >= 0 ? location : 0;
}
