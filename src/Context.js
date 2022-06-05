import React from "react";
import { useState, useEffect } from "react";

export const Context = React.createContext([]);

const DataList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  );
};

export default DataList;
