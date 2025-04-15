import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionDataI } from "@/types";

interface dialogProps {
  data: SectionDataI;
}

export const SectionDialog = ({ data }: dialogProps) => {
  return (
    <DialogHeader>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogDescription>{data.description}</DialogDescription>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row text-sm gap-1">
          <span>Personel :</span>
          <span className="font-medium">
            {data.user.name + " " + data.user.surname}
          </span>
        </div>
      </div>
    </DialogHeader>
  );
};
