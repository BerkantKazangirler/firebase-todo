import { SectionLayout } from "@/components";
import { useTitleContext } from "@/context/titles";

export const Layout = () => {
  const { titleData } = useTitleContext();

  return (
    <div className="flex flex-row overflow-x-auto h-full py-4 w-full gap-2">
      {titleData?.map((m, index) => (
        <SectionLayout status={m.name} key={index} />
      ))}
    </div>
  );
};
