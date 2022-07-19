import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

const MockCard = (props) => {
  return <div>{JSON.stringify(props.item)}</div>;
};

const App = () => {
  const [data, setData] = useState();

  async function getData(str) {
    const serverStream = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${str}`
    );
    const readDataFromStream = await serverStream.json();
    console.log(
      "I want to know the object keys so I will print them:",
      Object.keys(readDataFromStream)
    );
    setData(readDataFromStream);
  }

  return (
    <>
      <Header search={getData} />
      <div>
        {data
          ? data.items.map((singleBook, index) => (
              <MockCard key={index} item={singleBook} />
            ))
          : "No data to show"}
      </div>
    </>
  );
};

export default App;
