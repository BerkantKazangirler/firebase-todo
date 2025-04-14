import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function refreshData() {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (error) {
    console.error("Veri yenileme hatası:", error);
  }
}