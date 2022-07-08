import React from 'react';
import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CandleDisplay=()=>{
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
  
    const arr = finalItem.ChartXValues
    const rDate = arr.sort(function (a, b) {
        return a - b;
    });

    return(
        <Plot
            data={[
                {
                    x:finalItem.ChartXValues, 
  
                    close:finalItem.ChartCloseValues, 
                    
                    decreasing: {line: {color: 'red'}},
                    
                    high:  finalItem.ChartHighValues, 
                    
                    increasing: {line: {color: 'green'}},
                    
                    line: {color: 'rgba(31,119,180,1)'}, 
                    
                    low:finalItem.ChartLowValues, 
                    
                    open: finalItem.ChartOpenValues, 
                    
                    type: 'candlestick', 
                    xaxis: 'x', 
                    yaxis: 'y'

                }
            ]}

                layout = {{
                    dragmode: 'zoom', 
                    margin: {
                      r: 10, 
                      t: 25, 
                      b: 40, 
                      l: 60
                    }, 
                    width:"600",
                    showlegend: false, 
                    xaxis: {
                      autorange: true, 
                      domain: [0, 1], 
                      range: [rDate[0], rDate[rDate.length-1]], 
                      rangeslider: {range: [rDate[0], rDate[rDate.length-1]]}, 
                      title: 'Date', 
                      type: 'date'
                    }, 
                    yaxis: {
                      autorange: true, 
                      domain: [0, 1], 
                      range: [114.609999778, 137.410004222], 
                      type: 'linear'
                    }
        }}

        />
    )
}

export default CandleDisplay