import React from "react";

const CountResources = ({ countOf, count }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-xl text-[#AB65B7]">{countOf}/</p>
      <p>
        <span className="text-2xl">{count}</span> {countOf}
      </p>
    </div>
  );
};

export default CountResources;
