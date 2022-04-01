import React, { useContext, useEffect, useState } from "react";
import charecterURL from "../../utils/api";

const Context = React.createContext();

export function useDataContext() {
  return useContext(Context);
}

function DataContext({ children }) {
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(charecterURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        var updatedData = data.results?.map((d) => {
          return {
            ...d,
            liked: false,
          };
        });
        setMainData(updatedData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function updateLikeData(id) {
    const _data = mainData.map((d) => {
      if (id === d.id) {
        return {
          ...d,
          liked: true,
        };
      } else {
        return d;
      }
    });
    setMainData(_data);
  }

  function updateUnlikeData(id) {
    const _data = mainData.map((d) => {
      if (id === d.id) {
        return {
          ...d,
          liked: false,
        };
      } else {
        return d;
      }
    });
    setMainData(_data);
  }

  const value = {
    mainData,
    updateLikeData,
    updateUnlikeData,
  };
  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
}

export default DataContext;
