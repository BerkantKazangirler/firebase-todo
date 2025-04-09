import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SectionData, viewSectionEnum } from "@/components/type";
import { useSectionContext } from "@/context";

interface sectionProps {
  status: string;
}

export const SectionLayout = ({ status }: sectionProps) => {
  const [selected, setSelected] = useState<SectionData>();
  const { sectionData } = useSectionContext();

  return (
    <div className="border rounded-md p-4 h-full">
      <Dialog>
        <h2 className="text-xl font-bold mb-4">{viewSectionEnum(status)}</h2>
        <DialogTrigger className="flex flex-col gap-3 w-full">
          {sectionData
            ?.filter(
              (t) => viewSectionEnum(t.status) === viewSectionEnum(status)
            )
            ?.map((m: SectionData) => (
              <div key={m.id} id={m.id}>
                <Section setSelected={setSelected} data={m} />
              </div>
            ))}
        </DialogTrigger>
        <DialogContent>
          <SectionDialog data={selected} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
