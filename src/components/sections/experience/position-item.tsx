import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon, Code2 } from "lucide-react";

import type { ExperiencePosition } from "@/lib/types";
import MarkdownRenderer from "@/components/ui/markdown-renderer.astro";
import { markdownToHtml } from "@/lib/markdown";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  return (
    <AccordionPrimitive.Item value={position.id} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <AccordionPrimitive.Trigger className="group/experience block w-full cursor-pointer py-1 text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
          <div className="relative z-1 mb-1 flex items-center space-x-3">
            <Code2 className="size-4" />

            <div className="font-heading flex-1 font-bold text-balance underline-offset-4 group-hover/experience:underline">
              {position.title}
            </div>

            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
          </div>

          <div className="flex items-center gap-2 pl-7 font-mono text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <span>{position.employmentType}</span>
                <span className="flex h-4 w-px shrink-0 bg-border" />
              </>
            )}

            <span>{position.year}</span>
          </div>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {position?.description && (
            // <MarkdownRenderer className="ml-7" content={position.description} />
            <p>{position.description}</p>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <div className="flex-wap flex gap-1.5 pt-2 pl-7">
              {position.skills.map((skill, index) => {
                return (
                  <p
                    key={index}
                    className="inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          )}
        </AccordionPrimitive.Content>
      </div>
    </AccordionPrimitive.Item>
  );
}
