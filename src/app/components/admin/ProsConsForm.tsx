import React from "react";

interface ProsCons {
  type: "pro" | "con";
  description: string;
}

interface Props {
  prosCons: ProsCons[];
  setProsCons: (newData: ProsCons[]) => void;
}

const ProsConsForm: React.FC<Props> = ({ prosCons, setProsCons }) => {
  const handleAdd = (type: "pro" | "con") => {
    setProsCons([...prosCons, { type, description: "" }]);
  };

  const handleChange = (index: number, value: string) => {
    const updatedProsCons = [...prosCons];
    updatedProsCons[index].description = value;
    setProsCons(updatedProsCons);
  };

  const handleRemove = (index: number) => {
    const updatedProsCons = prosCons.filter((_, i) => i !== index);
    setProsCons(updatedProsCons);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Pros & Cons</h3>
      {prosCons.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 mb-2">
          <span className={`px-2 py-1 text-white rounded ${item.type === "pro" ? "bg-green-500" : "bg-red-500"}`}>
            {item.type}
          </span>
          <input
            type="text"
            value={item.description}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Enter description"
            className="border p-1 flex-grow"
          />
          <button
            onClick={() => handleRemove(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex space-x-2 mt-2">
        <button onClick={() => handleAdd("pro")} className="bg-green-500 text-white px-3 py-1 rounded">Add Pro</button>
        <button onClick={() => handleAdd("con")} className="bg-red-500 text-white px-3 py-1 rounded">Add Con</button>
      </div>
    </div>
  );
};

export default ProsConsForm;
