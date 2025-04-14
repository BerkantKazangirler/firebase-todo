import { SectionData } from "@/components/type";
interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionData>>;
  data: SectionData;
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
        className="border rounded-md p-3 shadow-sm"
      >
        <h3 className="font-semibold text-lg">{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
