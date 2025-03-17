import React from "react";

const ShowData = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      {data.map((da) => {
        return (
          <div className="w-100 p-3 shadow-xl border-5 border-amber-50 border-l-indigo-500  rounded-xl " key={da.id}>
            {/* <p>Id: {da.id}</p> */}
            <p className="text-xl font-bold mt-3 mb-2">Title: {da.title}</p>
            <p>Description: {da.body}</p>
            <p className="mt-3 mb-2 bg-blue-300 w-fit p-1 rounded-xl">UserId: {da.userId}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowData;
