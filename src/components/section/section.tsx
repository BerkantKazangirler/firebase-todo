import { useState, useEffect } from "react";
import { SectionData } from "../type";
import { fetchSectionData, SectionDialog } from "@/components";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface SectionProps {
  sectionId: string;
}

export const Section = ({ sectionId }: SectionProps) => {
  const [data, setData] = useState<SectionData[]>([]);
  const [selected, setSelected] = useState<SectionData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sectionData = await fetchSectionData(sectionId);
        setData(sectionData);
      } catch (err) {
        console.log(`Veri yüklenirken hata oluştu: ${err}`);
      }
    };

    loadData();
  }, [sectionId]);

  return (
    <>
      <div className="border rounded-md p-4 my-4">
        <Dialog>
          <h2 className="text-xl font-bold mb-4">{sectionId}</h2>
          <DialogTrigger>
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
          </DialogTrigger>
          <DialogContent>
            <SectionDialog data={selected} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
