import { SectionLayout, UserLayout } from "@/components";
import { useTitleContext } from "@/context/titles";

export const Layout = () => {
  const { titleData } = useTitleContext();

  return (
    <div className="flex p-4 flex-row gap-4 justify-between">
      <UserLayout />

      <div className="grid grid-cols-2 gap-2">
        {titleData?.map((m, index) => (
          <div key={index}>
            <SectionLayout status={m.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
