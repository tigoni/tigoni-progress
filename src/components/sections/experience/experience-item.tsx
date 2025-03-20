
import type { Experience } from "@/lib/types";
import { ExperiencePositionItem } from "./position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative space-y-4 py-4 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-border">

      <div className="flex border px-2 items-center space-x-4">
        <span className="size-2 rounded-full bg-border " />

        <h3 className="text-lg font-black">
          {experience.company}
        </h3>

      </div>

      <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => {
          return <ExperiencePositionItem key={index} position={position} />;
        })}
      </div>
    </div>
  );
}

