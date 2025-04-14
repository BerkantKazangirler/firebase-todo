import { SectionData } from "@/components/type";
import { createContext, useContext, useEffect, useState } from "react";
import { fetch } from "@/utils/fetch-data";

type DataContextType = {
  sectionData: SectionData[];
  setSectionData: React.Dispatch<React.SetStateAction<SectionData[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const DataContext = createContext<DataContextType>({
  sectionData: [],
  setSectionData: () => {},

  loading: false,
  setLoading: () => {},
});

export const useSectionContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [sectionData, setSectionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sectionDataFetch = await fetch("todos");
        setSectionData(sectionDataFetch);
      } catch (error) {
        console.log("hata" + error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        sectionData,
        setSectionData,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
