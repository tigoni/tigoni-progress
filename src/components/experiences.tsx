
import { EXPERIENCES } from "@/lib/constants";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ExperienceItem } from "./experience-item";

const defaultValue = EXPERIENCES.flatMap(exp =>
    exp.positions.filter(pos => pos.expanded).map(pos => pos.id)
);

export const Experiences = () => {
    return (
        <AccordionPrimitive.Root
            type="multiple"
            defaultValue={defaultValue}
            asChild
        >
            <>
                {
                    EXPERIENCES.map(experience => {
                        return <ExperienceItem key={experience.company} experience={experience} />;
                    })
                }
            </>
        </AccordionPrimitive.Root>

    )
} 