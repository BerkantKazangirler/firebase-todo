import cn from "classnames";
import { priorityStyles, sectionStyles } from "@/components/styles";
import { Badge } from "@/components";
import { useDataContext } from "@/contexts";
import { SectionDataI } from "@/types";
import { viewPriorityEnum } from "@/types/section";
interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionDataI>>;
  data: SectionDataI;
}

export const Section = ({ setSelected, data }: SectionProps) => {
  const { users } = useDataContext();

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("missionId", data.id);
  };

  const style = sectionStyles[data.status];
  const prioritystyle = priorityStyles[data.priority];

  const filteredUser = users.find((userData) => {
    return String(data?.assigned_to) === userData.id;
  });

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
        className="bg-white rounded p-3 shadow-sm"
      >
        <div className="gap-2 flex flex-col">
          <h3 className={cn("font-[400] w-fit text-balance", style.title)}>
            {data.title}
          </h3>
          <div className="grid grid-cols-2 w-full gap-3">
            {data.tags &&
              data.tags.map((m, index) => <Badge tag={m} key={index} />)}
          </div>
          <div className="flex flex-row justify-between">
            <p className="w-fit text-sm">
              Öncelik :{" "}
              <span className={cn("font-medium", prioritystyle)}>
                {viewPriorityEnum(data.priority)}
              </span>
            </p>
            <p className="text-sm text-black text-opacity-30 font-medium">
              {filteredUser.name + " " + filteredUser.surname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
