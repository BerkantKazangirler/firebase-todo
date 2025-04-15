import { Badge } from "@/components";
import { SectionDataI } from "@/types";
import { PriorityEnum } from "@/types/section";
interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionDataI>>;
  data: SectionDataI;
}

export const Section = ({ setSelected, data }: SectionProps) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("missionId", data.id);
  };

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
          <h3 className="font-[400] w-fit text-balance">{data.title}</h3>
          <div className="grid grid-cols-2 w-full gap-3">
            {data.tags &&
              data.tags.map((m, index) => <Badge tag={m} key={index} />)}
          </div>
          <div className="flex flex-row justify-between">
            <p className="w-fit text-sm">
              Öncelik : <span>{PriorityEnum[data.priority]}</span>
            </p>
            <p className="text-sm text-black text-opacity-30 font-medium">
              {data.user.name + " " + data.user.surname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
