export function DecodeAttrs(html: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = escapeQuote(html);
    return deescapeQuote(textArea.innerText);
}

function escapeQuote(html: string) {
    return html.replace(/&quot;/gi, '__$__');
}

function deescapeQuote(html: string) {
    return html.replace(/__\$__/g, '&quot;');
}
