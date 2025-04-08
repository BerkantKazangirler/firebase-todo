import { Users } from "@/components";

export const UserLayout = () => {
  return (
    <div className="border rounded-md p-4 my-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcılar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Users />
      </div>
    </div>
  );
};
