import { Users } from "@/components";

export const UserLayout = () => {
  return (
    <div className="border rounded-md h-fit p-4 my-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcılar</h2>
      <Users />
    </div>
  );
};
