import axios from "axios";
import React, { useState, useEffect } from "react";
import ShowData from "./components/ShowData";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    let tempData = data;

    if (selectedUserId) {
      tempData = tempData.filter(
        (post) => post.userId === parseInt(selectedUserId)
      );
    }

    if (searchQuery) {
      tempData = tempData.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortType === "title-asc") {
      tempData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "title-desc") {
      tempData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "userId-asc") {
      tempData.sort((a, b) => a.userId - b.userId);
    } else if (sortType === "userId-desc") {
      tempData.sort((a, b) => b.userId - a.userId);
    }

    setFilteredData([...tempData]);
  }, [selectedUserId, searchQuery, sortType, data]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Users</option>
          {[...new Set(data.map((post) => post.userId))].map((userId) => (
            <option key={userId} value={userId}>
              User {userId}
            </option>
          ))}
        </select>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="userId-asc">User ID (Ascending)</option>
          <option value="userId-desc">User ID (Descending)</option>
        </select>
      </div>

      {filteredData.length > 0 ? (
        <ShowData data={filteredData} />
      ) : (
        <div className="text-center text-gray-500">No posts found.</div>
      )}
    </div>
  );
};

export default App;
