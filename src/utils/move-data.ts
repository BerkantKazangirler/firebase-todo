import { db } from "@/configs/firebase";
import { doc, updateDoc } from "firebase/firestore";

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

