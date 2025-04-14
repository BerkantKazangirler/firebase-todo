import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SectionData, viewSectionEnum } from "@/components/type";
import { useSectionContext } from "@/context";
import { moveDocument } from "@/utils/move-data";

interface sectionProps {
  status: string;
}

export const SectionLayout = ({ status }: sectionProps) => {
  const [selected, setSelected] = useState<SectionData>();
  const { sectionData } = useSectionContext();

  const handleDrop = (event: any) => {
    event.preventDefault();
    const missionId = event.dataTransfer.getData("missionId");
    console.log("m.id", missionId);

    const targetStatusId = event.currentTarget.getAttribute("data-status-id");
    console.log("target", targetStatusId);

    if (missionId) {
      moveDocument(missionId, targetStatusId);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      data-status-id={status}
      className="border rounded-md p-4 h-full"
      onDragOver={handleDragOver}
    >
      <Dialog>
        <h2 className="text-xl font-bold mb-4">{viewSectionEnum(status)}</h2>
        <DialogTrigger className="flex flex-col gap-3 w-full">
          {sectionData
            ?.filter(
              (t) => viewSectionEnum(t.status) === viewSectionEnum(status)
            )
            ?.map((m: SectionData) => (
              <div
                key={m.id}
                id={m.id}
                onDragStart={(e) => e.dataTransfer.setData("missionId", m.id)}
              >
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
