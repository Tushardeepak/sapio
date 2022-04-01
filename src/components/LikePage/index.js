import React from "react";
import { useDataContext } from "../context/DataContext";
import Cards from "../Home/Cards";
import "./likepage.css";

function LikePage() {
  const { mainData } = useDataContext();
  return (
    <div className="likepageContainer">
      <div className="likepageBox">
        {mainData?.map((d) => (d.liked ? <Cards key={d.id} data={d} /> : ""))}
      </div>
    </div>
  );
}

export default LikePage;
