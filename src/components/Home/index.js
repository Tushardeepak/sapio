import React from "react";
import { useDataContext } from "../context/DataContext";
import Cards from "./Cards";
import "./home.css";

function Home() {
  const { mainData } = useDataContext();
  return (
    <div className="homeContainer">
      <div className="homeBox">
        {mainData?.map((d) => (
          <Cards key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
}

export default Home;
