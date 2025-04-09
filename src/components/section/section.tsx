import { SectionData } from "@/components/type";
interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionData>>;
  data: SectionData;
}

export const Section = ({ setSelected, data }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4">
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
