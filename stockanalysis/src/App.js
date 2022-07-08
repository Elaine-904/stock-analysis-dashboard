import React from "react";
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import CandleDisplay from "./components/CandleDisplay";
import LineDisplay from "./components/LineDisplay";
import Tables from "./components/Tables";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Header from './components/Header'
import Toggle from "./components/ThemeToggle";

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
    <body className="flex flex-col h-screen">
                  
        <Header />
        <Toggle/>
        <main class="container mb-auto ">
          <SearchBar />
          <NewsBoard />
        </main>
        <Footer />
    



    </body>
  );
}

export default App;