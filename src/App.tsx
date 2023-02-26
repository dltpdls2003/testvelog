import React from "react";
import Routing from "./routes/Routing";
import GlobalStyles from "./libs/styles/globals";
import MainHeader from "./components/Header/Mainheader";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Maintrend from "./pages/Main/Maintrend";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Maintrend />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;