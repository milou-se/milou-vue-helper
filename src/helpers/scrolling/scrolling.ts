export class Scrolling {
    static IsBottom(e: Event) {
        if (e) {
            const $el = $(e.currentTarget as HTMLElement);
            const scrollTop = $el.scrollTop() || 0;
            const outerHeight = $el.outerHeight() || 0;
            const scrollMargin = 5;
            if ($el[0].scrollHeight - (scrollTop + scrollMargin) <= outerHeight) {
                return true;
            }
        }
        return false;
    }
    static Exist(el: HTMLElement) {
        return el.scrollHeight > el.clientHeight;
    }

    static GoTo(element: JQuery<Element> | JQuery<HTMLElement>, onlyUp: boolean = false, speed: number = 300, offset: number = 50, scrollElement = 'html, body') {
        const position = element.offset();
        const scrollOffset = $(scrollElement).offset();
        if (position && scrollElement !== 'html, body' && scrollOffset !== undefined) {
            position.top = position.top - scrollOffset.top;
        }
        const scrollTop = $(scrollElement === 'html, body' ? 'body' : scrollElement).scrollTop();
        if (position && scrollTop !== undefined) {
            const windowScroll = $(window).scrollTop();
            if (!onlyUp || (windowScroll && onlyUp && position.top < windowScroll)) {
                $(scrollElement).animate(
                    {
                        scrollTop: position.top + scrollTop - offset
                    },
                    speed
                );
            }
        }
    }
}
