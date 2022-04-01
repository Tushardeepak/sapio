import React from "react";
import { useDataContext } from "../context/DataContext";
import Cards from "./Cards";
import "./home.css";

function Home() {
  const { mainData } = useDataContext();
  const [search, setSearch] = React.useState("");
  return (
    <div className="homeContainer">
      <input
        value={search}
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
        className="searchBox"
        placeholder="Search"
      />
      <div className="homeBox">
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
            }
          })
          .map((d) => (
            <Cards key={d.id} data={d} />
          ))}
      </div>
    </div>
  );
}

export default Home;
