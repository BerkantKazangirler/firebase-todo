import { useDataContext } from "@/context";

export const Users = () => {
  const { users } = useDataContext();

  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <div
          key={user.name}
          className="border rounded-md p-3 shadow-sm flex items-center"
        >
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-xs mt-1">{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
