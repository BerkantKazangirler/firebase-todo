import { Section, SectionDialog } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { SectionData, viewSectionEnum } from "@/components/type";
import { moveDocument, refreshData } from "@/utils/move-data";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";

interface sectionProps {
  status: string;
}

export const SectionLayout = ({ status }: sectionProps) => {
  const [selected, setSelected] = useState<SectionData>();
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

  const handleDrop = (event: any) => {
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
      className="border rounded-md p-4 h-full"
      onDragOver={handleDragOver}
    >
      <Dialog>
        <h2 className="text-xl font-bold mb-4">{viewSectionEnum(status)}</h2>
        <DialogTrigger className="flex flex-col gap-3 w-full">
          {data
            ?.filter(
              (t) => viewSectionEnum(t.status) === viewSectionEnum(status)
            )
            ?.map((m: SectionData) => (
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
