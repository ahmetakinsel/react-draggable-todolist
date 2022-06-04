import React from "react";
import DataList from "./Context";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div>
      <DataList>
        <Form />
        <List />
      </DataList>
    </div>
  );
}

export default App;
