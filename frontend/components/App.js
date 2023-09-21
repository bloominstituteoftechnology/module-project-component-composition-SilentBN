import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
      <figure>
        <img src={data.url} alt={data.title} />
        <figcaption>Cool Picture Taken On {data.date}</figcaption>
      </figure>
    </div>
  );
}

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    function fetchData() {
      axios
        .get(URL)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    // fetchData();
  }, []);
  if (!data) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <section>
        <Card data={data} />
      </section>

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </>
  );
}

export default App;
