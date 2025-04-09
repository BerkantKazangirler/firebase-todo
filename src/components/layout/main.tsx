import { SectionLayout, UserLayout } from "@/components";

export const Layout = () => {
  return (
    <div className="flex p-4 flex-row justify-around">
      <UserLayout />

      <div className="grid grid-cols-2 gap-4">
        <SectionLayout />
      </div>
    </div>
  );
};
