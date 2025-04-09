import { TitleDataI } from "@/components/type";
import { createContext, useContext, useEffect, useState } from "react";
import { fetch } from "@/utils/fetch-data";

type TitleContextType = {
  titleData: TitleDataI[];
  setTitleData: React.Dispatch<React.SetStateAction<TitleDataI[]>>;
};

const TitleContext = createContext<TitleContextType>({
  titleData: [],
  setTitleData: () => {},
});

export const useTitleContext = () => useContext(TitleContext);

export const TitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [titleData, setTitleData] = useState<TitleDataI[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const titleDatas = await fetch("titles");
      setTitleData(titleDatas);
    };

    loadUsers();
  }, []);

  return (
    <TitleContext.Provider
      value={{
        titleData,
        setTitleData,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
