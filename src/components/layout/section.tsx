import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { SectionData, TitlesData } from "@/components/type";
import { fetch } from "@/utils/fetch-data";

interface SectionProps {
  sectionId: string;
}

export const SectionLayout = ({ sectionId }: SectionProps) => {
  const [selected, setSelected] = useState<SectionData>();
  const [titles, setTitles] = useState<TitlesData[]>([]);
  const [data, setData] = useState([]);

  const titleNames = titles.find((testdata) => {
    return sectionId === testdata.id;
  });

  useEffect(() => {
    const loadUsers = async () => {
      const titlesData = await fetch("titles");
      setTitles(titlesData);
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const sectionData = await fetch(sectionId);
      setData(sectionData);
    };

    loadData();
  }, [sectionId]);

  return (
    <div className="border rounded-md p-4 my-4">
      <Dialog>
        <h2 className="text-xl font-bold mb-4">
          {titleNames?.name +
            " " +
            (data.length ? "(" + data.length + ")" : "(0)")}
        </h2>
        <DialogTrigger>
          <Section sectionId={sectionId} setSelected={setSelected} />
        </DialogTrigger>
        <DialogContent>
          <SectionDialog data={selected} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
