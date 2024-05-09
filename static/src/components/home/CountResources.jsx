import React, { useState, useEffect } from "react";
import { getUsersCount, getPostsCount } from "../../api/api.requests";

const CountResources = ({ countOf }) => {
  const [count, setCount] = useState(null);

  /*useEffect(() => {
    const returnCount = async () => {
      if (countOf === "users") {
        const users = await getUsersCount();
        setCount(users);
      } else {
        const posts = await getPostsCount();
        setCount(posts);
      }
    };
    returnCount();
  }, []);*/

  return (
    <div className="flex justify-between items-center">
      <p className="text-xl text-[#AB65B7]">{countOf}/</p>
      <p>
        <span className="text-2xl">{!count ? "+10" : count}</span> {countOf}
      </p>
    </div>
  );
};

export default CountResources;
