import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

export function MarkdownRenderer({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <p className={cn("prose", className)}>
      <Markdown>{content}</Markdown>
    </p>
  );
}

