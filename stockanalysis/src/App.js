import React from "react";
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import NewsBoard from "./pages/NewsBoard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";
import 'tw-elements';

function App() {
  let chartX = [];
  let closeValues = [];
  let openValues = [];
  let highValues = [];
  let lowValues = [];

  const financialItem = {
    ChartXValues: chartX,
    ChartCloseValues: closeValues,
    ChartOpenValues: openValues,
    ChartHighValues: highValues,
    ChartLowValues: lowValues
  }

  const [finalItem, setFinalItem] = useState(financialItem)


  const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"

  useEffect(() => {
    axios.request(url)
      .then(response => { return response.data; })
      .then(data => {
        console.log(data)
        const timeSeries = data['Time Series (Daily)']
        const metaData = data['Meta Data']
        console.log(metaData)
        for (let key in timeSeries) {
          chartX.push(key)
          openValues.push(timeSeries[key]['1. open'])
          highValues.push(timeSeries[key]['2. high'])
          lowValues.push(timeSeries[key]['3. low'])
          closeValues.push(timeSeries[key]['4. close'])
        }
        const result = {
          ChartXValues: chartX,
          ChartCloseValues: closeValues,
          ChartOpenValues: openValues,
          ChartHighValues: highValues,
          ChartLowValues: lowValues
        }
        console.log(result)
        setFinalItem(result)
      }).catch(error => console.log(`erros:${error}`))
  }, [])



  return (
    <div className="App ">
      <div class=' flex flex-col h-screen'>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
          <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
              <h5 class="text-xl text-white pr-2 font-semibold ">Stock Dashboard</h5>
              <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li class="nav-item p-2">
                  Newsboard
                </li>
                <li class="nav-item p-2">
                  ChartDisplay
                </li>
                <li class="nav-item p-2">
                  TableDisplay
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