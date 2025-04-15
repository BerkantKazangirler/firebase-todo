import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { moveDocument } from "@/api/move-data";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/configs/firebase";
import { refreshData } from "@/api/refresh-data";
import { SectionDataI } from "@/types";
import { SectionEnum } from "@/types/section";

interface sectionProps {
  status: string;
}

export const SectionLayout = ({ status }: sectionProps) => {
  const [selected, setSelected] = useState<SectionDataI>();
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "todos"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => unsub();
  }, []);

  const handleDrop = (event) => {
    event.preventDefault();
    const missionId = event.dataTransfer.getData("missionId");
    const misssionStatusId = event.dataTransfer.getData("missionStatus");
    const targetStatusId = event.currentTarget.getAttribute("data-status-id");

    if (missionId) {
      if (misssionStatusId != targetStatusId) {
        moveDocument(missionId, targetStatusId);
        refreshData();
      } else {
        console.log("Aynı yere bırakamazsın!");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      data-status-id={status}
      className="bg-[#ebebeb] w-full min-w-[300px] rounded-md p-4"
      onDragOver={handleDragOver}
    >
      <Dialog>
        <h2 className="font-medium mb-4 gap-1 text-black text-opacity-40 flex flex-row text-sm uppercase">
          {SectionEnum[status]}
          <p className="font-normal">
            {data.filter((data) => data.status == status).length}
          </p>
        </h2>
        <DialogTrigger className="flex flex-col outline-none gap-3 w-full">
          {data
            ?.filter((t) => SectionEnum[t.status] === SectionEnum[status])
            ?.map((m: SectionDataI) => (
              <div
                key={m.id}
                id={m.id}
                onDragStart={(e) => {
                  e.dataTransfer.setData("missionId", m.id);
                  e.dataTransfer.setData("missionStatus", m.status);
                }}
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
