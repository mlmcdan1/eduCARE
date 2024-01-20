// DaycareResult.jsx
import React from 'react';

const DaycareResult = ({ daycare }) => {
  return (
    <div className="mx-4 my-2 p-4 border border-gray-300 rounded-md">
      <img src={daycare.imageUrl} alt={daycare.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-2 text-xl font-bold">{daycare.name}</h2>
      <p className="text-gray-700">{daycare.address}</p>
    </div>
  );
};

export default DaycareResult;