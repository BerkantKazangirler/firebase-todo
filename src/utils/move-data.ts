import { db } from "@/config/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";


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

export async function moveDocument(docId: string, newStatus: string) {
  try {
    const docRef = doc(db, "todos", docId);
    await updateDoc(docRef, {
      status: newStatus,
    });
  } catch (error) {
    console.error("hata:", error);
  }
}

