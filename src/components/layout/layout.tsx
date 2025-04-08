import { SectionLayout, Users } from "@/components";

export const Layout = () => {
  const sections = Array.from({ length: 6 }, (_, i) => `section${i + 1}`);

  return (
    <div className="flex p-4 flex-row justify-between">
      <Users />

      <div className="flex flex-col">
        {sections.map((section) => (
          <SectionLayout key={section} sectionId={section} />
        ))}
      </div>

      {/* <Titles /> */}
    </div>
  );
};
