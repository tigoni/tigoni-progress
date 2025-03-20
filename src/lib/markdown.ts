// @ts-ignore
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

// Add custom styles for paragraphs and headings

export function markdownToHtml(markdown: string, className?: string): string {
    md.renderer.rules.paragraph_open = () => `<p class="${className}">`;
    return md.render(markdown);
}
