import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon, Code2 } from "lucide-react";

import type { ExperiencePosition } from "@/lib/types";
import MarkdownRenderer from "@/components/ui/markdown-renderer.astro";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  return (
    <AccordionPrimitive.Item value={position.id}>
      <AccordionPrimitive.Trigger className="group/experience block w-full cursor-pointer py-1 text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
        <div className="relative z-1 mb-1 flex items-center space-x-3">
          <Code2 className="size-4 bg-background" />

          <h3 className="flex-1 font-black underline-offset-4 group-hover/experience:underline">
            {position.title}
          </h3>

          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-150" />
        </div>

        <div className="flex items-center gap-2 pl-7 font-mono text-sm text-foreground/80">
          {position.employmentType && (
            <>
              <span>{position.employmentType}</span>
              <span className="flex h-4 w-px shrink-0 bg-foreground/80" />
            </>
          )}

          <span>{position.year}</span>
        </div>
      </AccordionPrimitive.Trigger>

      <AccordionPrimitive.Content className="overflow-hidden my-4 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {position?.description && (
          // <MarkdownRenderer className="ml-7 prose prose-p:!text-sm" content={position.description} />
          <p className="text-sm ml-7">{position.description}</p>
        )}

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <div className="flex-wrap items-center justify-startj max-w-full ml-7 flex gap-1.5 py-2">
            {position.skills.map((skill, index) => {
              return (
                <p
                  key={index}
                  className="items-center rounded-md border px-2 py-0.5 flex min-fit font-mono shrink-0 text-xs text-foreground border-solid"
                >
                  {skill}
                </p>
              );
            })}

          </div>

        )}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
