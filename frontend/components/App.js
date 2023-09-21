import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
import Card from "./Card";

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
    setData({
      date: "2023-09-20",
      explanation:
        "Where else might life exist?  One of humanity's great outstanding questions, locating planets where extrasolar life might survive took a step forward in 2019 with the discovery of a significant amount of water vapor in the atmosphere of distant exoplanet K2-18b. The planet and its parent star, K2-18, lie about 124 light years away toward the constellation of the Lion (Leo). The exoplanet is significantly larger and more massive than our Earth, but orbits in the habitable zone of its home star.",
      hdurl:
        "https://apod.nasa.gov/apod/image/2309/ExoplanetJ2_Jabakenji_5940.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Methane Discovered on Distant Exoplanet",
      url: "https://apod.nasa.gov/apod/image/2309/ExoplanetJ2_Jabakenji_960.jpg",
    });
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
