import { SectionLayout } from "@/components";

export const Layout = () => {
  const titles = [
    {
      name: "TODO",
    },
    {
      name: "IN_PROGRESS",
    },
    {
      name: "POSTPONED",
    },
    {
      name: "TESTING",
    },
    {
      name: "COMPLETED",
    },
    {
      name: "CANCELLED",
    },
  ];

  return (
    <div className="flex flex-row overflow-x-auto h-full py-4 w-full gap-2">
      {titles?.map((m, index) => (
        <SectionLayout status={m.name} key={index} />
      ))}
    </div>
  );
};
