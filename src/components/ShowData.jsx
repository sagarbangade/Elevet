import React from "react";

const ShowData = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      {data.map((da) => {
        return (
          <div className="w-100 p-3 shadow-xl border-5 border-amber-50 border-l-indigo-500  rounded-2xl" key={da.id}>
            <p>Id: {da.id}</p>
            <p>UserId: {da.userId}</p>
            <p className="text-xl font-bold mt-3 mb-2">Title: {da.title}</p>
            <p>Description: {da.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowData;
