import { useDataContext } from "@/contexts";
import { Button } from "@/components";

export const Users = () => {
  const { users } = useDataContext();

  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <Button
          key={user.name}
          className="border rounded-md flex flex-col p-3 shadow-sm items-center"
        >
          <h3 className="font-medium">{user.name}</h3>
          <p className="opacity-70 text-sm">{user.email}</p>
          <p className="opacity-50 text-xs mt-1">{user.role}</p>
        </Button>
      ))}
    </div>
  );
};
