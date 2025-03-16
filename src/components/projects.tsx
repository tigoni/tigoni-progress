import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { PROJECTS } from "@/lib/constants";
import { ProjectItem } from "@/components/project-item";

export function Projects() {
    return (

        <AccordionPrimitive.Root
            type="multiple"
            defaultValue={["portfolio-website"]}
        >
            {
                PROJECTS.map(item => (
                    <ProjectItem key={item.id} project={item} />
                ))
            }
        </AccordionPrimitive.Root>
    );
}
