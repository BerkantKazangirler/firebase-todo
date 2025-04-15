import { createContext, useContext, useEffect, useState } from "react";
import { fetch } from "@/utils/fetch-data";
import { SectionDataI } from "@/types";

type DataContextType = {
  sectionData: SectionDataI[];
  setSectionData: React.Dispatch<React.SetStateAction<SectionDataI[]>>;
};

const DataContext = createContext<DataContextType>({
  sectionData: [],
  setSectionData: () => {},
});

export const useSectionContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sectionDataFetch = await fetch("todos");
        setSectionData(sectionDataFetch);
      } catch (error) {
        console.log("hata" + error);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        sectionData,
        setSectionData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
