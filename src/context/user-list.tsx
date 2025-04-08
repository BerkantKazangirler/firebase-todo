import { createContext, useContext, useEffect, useState } from "react";
import { fetch } from "@/utils/fetch-data";
import { UserData } from "@/components/type";

type DataContextType = {
  users: UserData[];
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const DataContext = createContext<DataContextType>({
  users: [],
  setUsers: () => {},
});

export const useDataContext = () => useContext(DataContext);

export const UserListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetch("users");
      setUsers(userData);
    };

    loadUsers();
  }, []);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
