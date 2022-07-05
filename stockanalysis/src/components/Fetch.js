import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import React from 'react';
import Plot from 'react-plotly.js';
import CandleDisplay from "./CandleDisplay";
import LineDisplay from "./LineDisplay";

export const Fetch=()=>{
    //LL62LSLMAKSWGG1L
   
    let chartX = [];
    let closeValues = [];
    let openValues = [];
    let highValues = [];
    let lowValues = [];

    const financialItem={
        ChartXValues: chartX,
        ChartCloseValues: closeValues,
        ChartOpenValues: openValues,
        ChartHighValues: highValues,
        ChartLowValues:lowValues
    }

    const [finalItem, setFinalItem] = useState(financialItem)


    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"

    useEffect(()=>{ axios.request(url)
        .then(response=>
                {return response.data;})
            .then(data=>{
                console.log(data)
                const timeSeries = data['Time Series (Daily)']
                const metaData = data['Meta Data']
                console.log(metaData)
                for(let key in timeSeries){
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
                    ChartLowValues:lowValues
                }
                console.log(result)
                setFinalItem(result)
                console.log(`${finalItem.ChartXValues}`)
                console.log( `${finalItem.ChartCloseValues}`)
        }).catch(error=>console.log(`erros:${error}`))},[])


    return(
        <>
          <CandleDisplay finalItem={finalItem} />
          <LineDisplay finalItem={finalItem} />
        
        </>
    )
}


export default Fetch