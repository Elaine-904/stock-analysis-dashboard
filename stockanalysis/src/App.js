import React from "react";
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import NewsBoard from "./pages/NewsBoard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";
import 'tw-elements';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className="App ">
      <div class=' flex flex-col h-screen'>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
          <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
              <h5 class="text-xl text-white pr-2 font-semibold ">Stock Dashboard</h5>
              <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li class="nav-item p-2">
                <Link to="/Newsboard">Newsboard</Link> 
                </li>
                <li class="nav-item p-2">
                <Link to="/Tables">TableDisplay</Link>
                </li>
                <li class="nav-item p-2">
                <Link to="/CandleDisplay">ChartDisplay</Link>
                </li>
              </ul>

            </div>

            <div class="flex items-center relative">
              <DarkMode />
            </div>
          </div>
        </nav>

        <main class=" mb-auto ">
          <SearchBar />
          <NewsBoard />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;