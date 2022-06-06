import React from "react";
import Context from "./Context";
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
      <h2>Task Manager</h2>
      <Context>
        <Form />
        <List />
      </Context>
    </div>
  );
}

export default App;
