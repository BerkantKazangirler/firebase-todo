import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionData } from "@/components/type";

export const SectionDialog = (data: SectionData) => {
  return (
    <DialogHeader>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogDescription>{data.description}</DialogDescription>
      <div className="flex flex-col gap-2"></div>
    </DialogHeader>
  );
};
