import { collection, getDocs } from "firebase/firestore";
import { FirebaseConfig } from "@/components";

export const fetch = async (url: string) => {
  try {
    const collectionRef = collection(FirebaseConfig, url);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() })
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};