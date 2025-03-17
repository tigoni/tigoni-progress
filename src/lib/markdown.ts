// @ts-ignore
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
});

export function markdownToHtml(markdown: string, isInline = true): string {
    try {
        if (isInline) {
            return md.renderInline(markdown);
        } else {
            return md.render(markdown);
        }
    } catch (e) {
        return markdown;
    }
}