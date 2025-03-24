import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionData } from "../type";

interface SectionDialogType {
  data: SectionData;
}

export const SectionDialog = ({ data }: SectionDialogType) => {
  return (
    <DialogHeader>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogDescription>{data.description}</DialogDescription>
      <div className="flex flex-col gap-2"></div>
    </DialogHeader>
  );
};
