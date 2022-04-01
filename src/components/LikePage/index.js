import React from "react";
import { useDataContext } from "../context/DataContext";
import Cards from "../Home/Cards";
import "./likepage.css";

function LikePage() {
  const { mainData } = useDataContext();
  const [search, setSearch] = React.useState("");
  return (
    <div className="likepageContainer">
      <input
        value={search}
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
        className="searchBox"
        placeholder="Search"
      />
      <div className="likepageBox">
        {mainData
          ?.filter((d) => {
            if (search === "") return d;
            else if (d.name.toLowerCase().includes(search.toLowerCase())) {
              return d;
            } else if (d.status.toLowerCase().includes(search.toLowerCase())) {
              return d;
            } else if (d.gender.toLowerCase().includes(search.toLowerCase())) {
              return d;
            } else if (d.species.toLowerCase().includes(search.toLowerCase())) {
              return d;
            } else return null;
          })
          ?.map((d) => (d.liked ? <Cards key={d.id} data={d} /> : ""))}
      </div>
    </div>
  );
}

export default LikePage;
