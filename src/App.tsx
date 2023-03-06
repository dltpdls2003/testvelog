import React from "react";
import Routing from "./routes/Routing";
import GlobalStyles from "./libs/styles/globals";
import MainHeader from "./components/Header/Mainheader";
import { Route, Routes } from "react-router-dom";
import Maintrend from "./pages/Main/Maintrend";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Maintrend />} />
        </Routes>
    </>
  );
}

export default App;