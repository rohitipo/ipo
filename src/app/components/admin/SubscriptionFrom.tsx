import React from "react";

interface Subscription {
  day: string;
  multiplier: number;
}

interface SubscriptionFormProps {
  subscriptionData: Subscription[];
  setSubscriptionData: React.Dispatch<React.SetStateAction<Subscription[]>>;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ subscriptionData, setSubscriptionData }) => {
  // Handle Change in Subscription Data
  const handleSubscriptionChange = (index: number, field: keyof Subscription, value: string | number) => {
    const updatedSubscription = [...subscriptionData];
    updatedSubscription[index] = { ...updatedSubscription[index], [field]: value };
    setSubscriptionData(updatedSubscription);
  };

  // Add New Subscription Day
  const addSubscriptionDay = () => {
    setSubscriptionData([...subscriptionData, { day: "", multiplier: 0 }]);
  };

  // Remove Subscription Day
  const removeSubscriptionDay = (index: number) => {
    const updatedSubscription = [...subscriptionData];
    updatedSubscription.splice(index, 1);
    setSubscriptionData(updatedSubscription);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Subscription Data</h3>
      {subscriptionData.map((subscription, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Day"
            value={subscription.day}
            onChange={(e) => handleSubscriptionChange(index, "day", e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded"
            aria-label={`Subscription Day ${index + 1}`}
          />
          <input
            type="number"
            placeholder="Multiplier"
            value={subscription.multiplier || ""}
            onChange={(e) => handleSubscriptionChange(index, "multiplier", parseFloat(e.target.value) || 0)}
            className="w-1/2 p-2 border border-gray-300 rounded"
            aria-label={`Multiplier for Day ${index + 1}`}
          />
          <button 
            onClick={() => removeSubscriptionDay(index)} 
            className="text-red-500 hover:text-red-700 transition"
            aria-label={`Remove Subscription Day ${index + 1}`}
          >
            ✕
          </button>
        </div>
      ))}
      <button 
        onClick={addSubscriptionDay} 
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
      >
        + Add Subscription Day
      </button>
    </div>
  );
};

export default SubscriptionForm;
