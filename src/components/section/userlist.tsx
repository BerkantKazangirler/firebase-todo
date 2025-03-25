import { useState, useEffect } from "react";
import { fetch } from "@/utils/fetch-data";

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetch("users");
      setUsers(userData);
    };

    loadUsers();
  }, []);

  return (
    <div className="border rounded-md p-4 my-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcılar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.name}
            className="border rounded-md p-3 shadow-sm flex items-center"
          >
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
              {user.role && (
                <p className="text-gray-500 text-xs mt-1">{user.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
