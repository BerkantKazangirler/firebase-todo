import { db } from "@/config/firebase";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

export async function moveDocument(oldurl: string,newurl: string, docId: string) {
  try {
    // Eski koleksiyondan veriyi alın
    const oldDocRef = doc(db, oldurl, docId);
    const oldDocSnap = await getDoc(oldDocRef);

    if (oldDocSnap.exists()) {
      // Veriyi yeni koleksiyona kaydedin
      const newDocRef = doc(db, newurl, docId);
      await setDoc(newDocRef, oldDocSnap.data());

      await deleteDoc(oldDocRef);

      console.log("Veri başarıyla taşındı!");
    } else {
      console.log("Belge bulunamadı!");
    }
  } catch (error) {
    console.error("Veri taşınırken bir hata oluştu: ", error);
  }
}