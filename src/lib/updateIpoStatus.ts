import { ref, get, update } from "firebase/database";
import { database } from "@/lib/firebaseConfig"; // Ensure Firebase is properly initialized

export async function updateIpoStatuses() {
  try {
    const ipoRef = ref(database, "ipos"); // Reference to IPOs in Firebase
    const snapshot = await get(ipoRef);

    if (!snapshot.exists()) {
      console.log("No IPOs found.");
      return;
    }

    // Get today's date in IST and ensure correct timestamp
    const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }); // "YYYY-MM-DD"
    const todayTimestamp = new Date(`${todayIST}T00:00:00+05:30`).getTime(); // Explicit IST timestamp

    const updates: Record<string, any> = {};

    snapshot.forEach((childSnapshot) => {
      const ipo = childSnapshot.val();
      const id = childSnapshot.key; // Unique Firebase ID

      if (!ipo.openDate || !ipo.closingDate) return;

      // Ensure openDate & closingDate are in YYYY-MM-DD format
      const openTimestamp = new Date(`${ipo.openDate}T00:00:00+05:30`).getTime();
      const closeTimestamp = new Date(`${ipo.closingDate}T23:59:59+05:30`).getTime(); // Closing date ends at 23:59 IST

      let newStatus = "Closed";

      if (todayTimestamp >= openTimestamp && todayTimestamp <= closeTimestamp) {
        
        newStatus = "Live";
      } else if (todayTimestamp < openTimestamp) {
       
        newStatus = "Upcoming";
      }

      if (ipo.status !== newStatus) {
        updates[`ipos/${id}/status`] = newStatus;
      }
    });

    if (Object.keys(updates).length > 0) {
      await update(ref(database), updates); // Bulk update in Firebase
      console.log("IPO statuses updated successfully at 12 AM IST.");
    } else {
      console.log("No status changes required.");
    }

  } catch (error) {
    console.error("Error updating IPO statuses:", error);
  }
}
