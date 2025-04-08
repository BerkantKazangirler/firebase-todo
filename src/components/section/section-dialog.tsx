import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionData } from "@/components/type";
import { useDataContext } from "@/context";

interface test {
  data: SectionData;
}

export const SectionDialog = ({ data }: test) => {
  const { users } = useDataContext();
  const test = users.find((testdata) => {
    return String(data?.assigned_to) === testdata.id;
  });

  return (
    <DialogHeader>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogDescription>{data.description}</DialogDescription>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <span>Personel :</span>
          <span>{test.name + " " + test.surname}</span>
        </div>
      </div>
    </DialogHeader>
  );
};
