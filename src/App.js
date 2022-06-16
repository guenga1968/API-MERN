import React from "react";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Formulario";
import { Routes, Route } from "react-router-dom";
import {AppProvider} from  './AppProvider';


function App() {
  return (
    <>
   < AppProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/form/:id" element={<Form />} />
      </Routes>
    </AppProvider>
    </>
  );
}

export default App;
