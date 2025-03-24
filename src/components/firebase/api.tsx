import { collection, getDocs } from "firebase/firestore";
import { FirebaseConfig } from "@/components";
import { SectionData, TitlesData, UserData } from "../type";

export const fetchSectionData = async (
  sectionId: string
): Promise<SectionData[]> => {
  try {
    const sectionCollectionRef = collection(FirebaseConfig, sectionId);
    const snapshot = await getDocs(sectionCollectionRef);
    return snapshot.docs.map(
      (doc) => ({ project_id: doc.id, ...doc.data() } as SectionData)
    );
  } catch (error) {
    console.error("Error fetching data:" + error);
    throw error;
  }
};

export const fetchUsersData = async (): Promise<UserData[]> => {
  try {
    const usersCollectionRef = collection(FirebaseConfig, "users");
    const snapshot = await getDocs(usersCollectionRef);
    return snapshot.docs.map(
      (doc) => ({ name: doc.id, ...doc.data() } as UserData)
    );
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw error;
  }
};

export const fetchTitleData = async (): Promise<TitlesData[]> => {
  try {
    const titlesCollectionRef = collection(FirebaseConfig, "titles");
    const snapshot = await getDocs(titlesCollectionRef);
    return snapshot.docs.map(
      (doc) => ({ name: doc.id, ...doc.data() } as TitlesData)
    );
  } catch (error) {
    console.error("Error fetching titles data:", error);
    throw error;
  }
};
