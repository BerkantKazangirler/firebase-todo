import { Titles } from "@/components";

export const TitleLayout = () => {
  return (
    <div className="border rounded-md p-4 my-4">
      <h2 className="text-xl font-bold mb-4">Başlıklar</h2>
      <div className="flex flex-col gap-4">
        <Titles />
      </div>
    </div>
  );
};
