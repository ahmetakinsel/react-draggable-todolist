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
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Context>
        <Form />
        <List />
      </Context>
    </div>
  );
}

export default App;
