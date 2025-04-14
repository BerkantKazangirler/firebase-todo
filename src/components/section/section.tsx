import { SectionData, viewPriorityEnum } from "@/components/type";
import { cn } from "@/utils/utils";
import { priorityStyles, sectionStyles } from "@/components/styles";
import { Badge } from "@/components";
interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionData>>;
  data: SectionData;
}

export const Section = ({ setSelected, data }: SectionProps) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("missionId", data.id);
  };

  const style = sectionStyles[data.status];
  const prioritystyle = priorityStyles[data.priority];

  return (
    <div
      className="flex flex-col gap-4"
      draggable
      onDragStart={handleDragStart}
      id={data.id}
    >
      <div
        onClick={() => setSelected(data)}
        key={data.id}
        className={cn("border rounded-md p-3 shadow-sm", style.border)}
      >
        <div className="grid grid-cols-4 w-full gap-5">
          {data.tags &&
            data.tags.map((m, index) => <Badge tag={m} key={index} />)}
        </div>
        <div className="py-2 flex flex-col">
          <h3 className={cn("font-[700] text-lg", style.title)}>
            {data.title}
          </h3>
          <p className={cn(style.desc)}>{data.description}</p>
          <p>
            Öncelik :{" "}
            <span className={cn("font-medium", prioritystyle)}>
              {viewPriorityEnum(data.priority)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
