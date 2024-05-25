// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./componants/Navbar";
// import Newss from './componants/Newss';

import Newss from "./componants/Newss";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact  path="/genrel" element={<Newss key="business" category="genrel" />}/>
              <Route exact  path="/business" element={<Newss key="business" category="business" />}/>
              <Route exact  path="/entertainment" element={<Newss key="entertainment" category="entertainment" />}/>
              <Route exact  path="/health" element={<Newss  key="health"category="health"/>}/>
              <Route exact  path="/sports" element={<Newss key="sports" category="sport"/>}/>
              <Route exact path="/tecnology" element={<Newss  key="technology" category="technology"/>}/>
              <Route exact path="/science" element={<Newss key="science"  category="science"/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
