import { Titles, Section, UsersList } from "@/components";

export const App = () => {
  const sections = Array.from({ length: 6 }, (_, i) => `section${i + 1}`);
  const activeSections = sections;

  return (
    <div className="container mx-auto p-4">
      <UsersList />

      {activeSections.map((section) => (
        <Section key={section} sectionId={section} />
      ))}

      <Titles />
    </div>
  );
};
