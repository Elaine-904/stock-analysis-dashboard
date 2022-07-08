import React from 'react';
import Plot from 'react-plotly.js';

const CandleDisplay=({finalItem})=>{

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