import { SectionLayout } from "@/components";

export const Layout = () => {
  const titles = [
    {
      id: "section1",
      name: "TODO",
    },
    {
      id: "section2",
      name: "IN_PROGRESS",
    },
    {
      id: "section3",
      name: "POSTPONED",
    },
    {
      id: "section4",
      name: "TESTING",
    },
    {
      id: "section5",
      name: "COMPLETED",
    },
    {
      id: "section6",
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
