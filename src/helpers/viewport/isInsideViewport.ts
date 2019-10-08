export function IsInsideViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || (document.documentElement ? document.documentElement.clientHeight : 0)) &&
        rect.right <= (window.innerWidth || (document.documentElement ? document.documentElement.clientWidth : 0))
    );
}
