import React from "react";
import DataList from "./Context";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2
        style={{
          color: "#8bc34a",
        }}
      >
        Task Manager
      </h2>
      <DataList>
        <Form />
        <List />
      </DataList>
    </div>
  );
}

export default App;
