export function IsOutsideViewport(elem: HTMLElement): object {
    // Get html's bounding
    const bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    const out: any = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;
}
