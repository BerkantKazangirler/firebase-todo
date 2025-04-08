import { useState, useEffect } from "react";

import { fetch } from "@/utils/fetch-data";
import { SectionData } from "@/components/type";

interface SectionProps {
  sectionId: string;
  setSelected: React.Dispatch<React.SetStateAction<SectionData>>;
}

export const Section = ({ sectionId, setSelected }: SectionProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const sectionData = await fetch(sectionId);
      setData(sectionData);
    };

    loadData();
  }, [sectionId]);

  return (
    <>
      <div className="flex flex-row gap-4">
        {data.map((data) => (
          <div
            onClick={() => setSelected(data)}
            key={data.project_id}
            className="border rounded-md p-3 shadow-sm"
          >
            <h3 className="font-semibold text-lg w-fit">{data.title}</h3>
            <p className="mt-2">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
