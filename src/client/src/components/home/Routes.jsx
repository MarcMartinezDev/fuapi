import React from "react";

const Routes = ({ method, route }) => {
  return (
    <div className="flex justify-between">
      <p>{method}</p>
      <p className="text-[#953ba5]">{route}</p>
    </div>
  );
};

export default Routes;
