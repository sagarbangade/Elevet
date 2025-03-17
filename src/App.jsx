import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ShowData from "./components/ShowData";
const App = () => {
  async function getData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  return <div>{data ? <ShowData data={data} /> : "Loading"}</div>;
};

export default App;
