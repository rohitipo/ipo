import React from "react";

interface ProsConsProps {
  prosCons: { type: "pro" | "con"; description: string }[] | { pros: string[]; cons: string[] };
}

const ProsCons: React.FC<ProsConsProps> = ({ prosCons }) => {
  // Convert { pros: string[], cons: string[] } into correct format if needed
  const normalizedProsCons = Array.isArray(prosCons)
    ? prosCons
    : [
        ...prosCons.pros.map((desc) => ({ type: "pro", description: desc })),
        ...prosCons.cons.map((desc) => ({ type: "con", description: desc }))
      ];

  if (normalizedProsCons.length === 0) {
    return <div className="text-center text-gray-500">No pros and cons available.</div>;
  }

  const pros = normalizedProsCons.filter((item) => item.type === "pro");
  const cons = normalizedProsCons.filter((item) => item.type === "con");

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-center mb-4">Pros & Cons</h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Pros Section */}
        <div className="flex-1 bg-green-50 p-4 rounded-lg shadow-md">
          <h4 className="text-green-700 font-medium text-lg mb-2">✅ Pros</h4>
          <ul className="list-none space-y-2">
            {pros.length > 0 ? (
              pros.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600">✔</span>
                  <span>{item.description}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No pros available.</li>
            )}
          </ul>
        </div>

        {/* Cons Section */}
        <div className="flex-1 bg-red-50 p-4 rounded-lg shadow-md">
          <h4 className="text-red-700 font-medium text-lg mb-2">❌ Cons</h4>
          <ul className="list-none space-y-2">
            {cons.length > 0 ? (
              cons.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-600">✖</span>
                  <span>{item.description}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No cons available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProsCons;
