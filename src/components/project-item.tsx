import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon, ExternalLink, FolderCodeIcon } from "lucide-react";

import { cn } from "@/lib/utils"

import type { Project } from "@/lib/types";
import { MarkdownRenderer } from "./markdown-renderer";

export function ProjectItem({
    className,
    project,
}: {
    className?: string;
    project: Project;
}) {
    return (
        <AccordionPrimitive.Item value={project.id} asChild>
            <div className={cn("flex items-center border-b cursor-pointer", className)}>
                <FolderCodeIcon className="mx-4.5 size-5 shrink-0 text-muted-foreground" />

                <div className="flex-1 border-l border-grid">
                    <AccordionPrimitive.Trigger className="group/project cursor-pointer flex w-full items-center justify-between gap-4 p-4 text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
                        <div>
                            <div className="mb-1 flex items-center gap-2 font-heading font-semibold text-balance underline-offset-4 group-hover/project:underline">
                                {project.title}
                                <a
                                    className="relative -top-px shrink-0 text-muted-foreground"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ExternalLink className="pointer-events-none size-4" />
                                </a>
                            </div>

                            <div className="font-mono text-sm text-muted-foreground">
                                {project.time}
                            </div>
                        </div>

                        <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
                    </AccordionPrimitive.Trigger>

                    <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        {project?.description && (
                            <MarkdownRenderer className="ml-4" content={project?.description} />
                        )}

                        {Array.isArray(project.tags) && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 border-t border-dashed border-grid p-4">
                                {project.tags.map((skill, index) => {
                                    return <div
                                        className="inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                                        key={index}>{skill}</div>;
                                })}
                            </div>
                        )}
                    </AccordionPrimitive.Content>
                </div>
            </div>
        </AccordionPrimitive.Item>
    );
}
