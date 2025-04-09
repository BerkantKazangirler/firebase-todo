import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SectionData } from "@/components/type";

export const SectionLayout = () => {
  const [selected, setSelected] = useState<SectionData>();

  // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   const missionId = event.dataTransfer.getData("missionId");

  //   if (missionId) {
  //     updateMission(missionId);
  //   }
  // };

  // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  // };

  return (
    <div
      className="border rounded-md p-4 my-4"
      // onDragOver={handleDragOver}
      // onDrop={handleDrop}
    >
      <Dialog>
        <h2 className="text-xl font-bold mb-4">
          {/* {titleNames?.name +
            " " +
            (data.length ? "(" + data.length + ")" : "(0)")} */}
        </h2>
        <DialogTrigger>
          <Section setSelected={setSelected} />
        </DialogTrigger>
        <DialogContent>
          <SectionDialog data={selected} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
