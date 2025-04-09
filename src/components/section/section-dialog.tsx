import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionData } from "@/components/type";
import { useDataContext } from "@/context";

interface dialogProps {
  data: SectionData;
}

export const SectionDialog = ({ data }: dialogProps) => {
  const { users } = useDataContext();
  const filteredData = users.find((userData) => {
    return String(data?.assigned_to) === userData.id;
  });

  return (
    <DialogHeader>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogDescription>{data.description}</DialogDescription>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <span>Personel :</span>
          <span>{filteredData.name + " " + filteredData.surname}</span>
        </div>
      </div>
    </DialogHeader>
  );
};
