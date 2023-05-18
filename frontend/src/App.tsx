import React from "react";
import "./App.css";
import Layout from "./Components/Layout";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken", accessToken);

  return (
    <Layout>
      <div className="App">
        <h1>Welcome To FooDi BuDi</h1>
      </div>
    </Layout>
  );
}

export default App;
