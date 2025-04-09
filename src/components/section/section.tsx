import { useState, useEffect } from "react";
import { fetch } from "@/utils/fetch-data";
import { SectionData } from "@/components/type";

interface SectionProps {
  setSelected: React.Dispatch<React.SetStateAction<SectionData>>;
}

export const Section = ({ setSelected }: SectionProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const sectionData = await fetch("todos");
      const test = sectionData.filter((test: SectionData) => {
        return test.status === "section1";
      });
      setData(test);
      setLoading(false);
    };

    loadData();
  }, []);

  // const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.dataTransfer.setData("missionId", data.id);
  // };

  return (
    <>
      <div className="flex flex-row gap-4">
        {loading ? (
          <div className="max-w-sm animate-pulse">
            <span>asd</span>
          </div>
        ) : (
          <>
            {data.map((data) => (
              <div
                draggable
                // onDragStart={handleDragStart}
                onClick={() => setSelected(data)}
                key={data.id}
                className="border rounded-md p-3 shadow-sm"
              >
                <h3 className="font-semibold text-lg w-fit">{data.title}</h3>
                <p className="mt-2">{data.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
