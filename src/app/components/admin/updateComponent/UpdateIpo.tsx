import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {toast } from "react-hot-toast"
import ConfirmDialog from "../../confirmBox";

interface Ipo {
  id: string;
  name: string;
  openDate: string;
  priceBand: string;
}

const UpdateIpo: React.FC = () => {

  const router = useRouter();

  
  const [ipos, setIpos] = useState<Ipo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [selectedIpo, setSelectedIpo] = useState<string | null>(null);


  // Fetch IPOs from API
  useEffect(() => {
    const fetchIpos = async () => {
      try {
        const response = await fetch("/api/ipo/getAllIpo");
        const data = await response.json();
        if (data.success) {
          setIpos(data.data);
          
        } else {
          toast.error("Failed to load IPOs");
        }
      } catch (error) {
        console.error("Error fetching IPOs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIpos();
  }, []);

  // Handle Edit
  const handleEdit = (ipoId: string) => {
    router.push(`/admin/AddIpo/${ipoId}`);
  };
  


  // handle delete
  const handleDeleteClick = (id: string) => {
    setSelectedIpo(id);
    
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    setOpen(false);
   
   
    try {
      const response = await fetch("/api/ipo/deleteIpo", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
  
      const result = await response.json();
      if (result.success) {
        toast.success("IPO deleted successfully!");
        window.location.reload();// Refresh the page after deletion
      } else {
        toast.error(result.message || "Failed to delete IPO");
      }
    } catch (error: any) {
      toast.error("Error deleting IPO");
    }
  };
  
  
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update IPOs</h2>

      {loading ? (
        <p className="text-gray-500">Loading IPOs...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ipos.map((ipo) => (
              <tr key={ipo.id} className="border">
                <td className="border p-2">{ipo.name}</td>
                <td className="border p-2">{ipo.openDate}</td>
                <td className="border p-2">{ipo.priceBand}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(ipo.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteClick(ipo.id)}
                  >
                    Delete
                  </button>
                  <ConfirmDialog
                    open={open}
                    onClose={() => setOpen(false)}
                    onConfirm={() => selectedIpo && handleDelete(selectedIpo)}
                    title="Delete IPO"
                    description="Are you sure you want to delete this IPO? This action cannot be undone."
                    />
                    </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UpdateIpo;
