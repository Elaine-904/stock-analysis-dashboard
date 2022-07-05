import React from 'react';
import Plot from 'react-plotly.js';

const LineDisplay=({finalItem})=>{

    return(
        <Plot
        data={[
            {
                x: finalItem.ChartXValues,
                y: finalItem.ChartCloseValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: "green"},
            }
        ]}
        layout={{ title: "linechart display"}}
        options ={ {displaylogo: 'false'} }
    />
    )
}

export default LineDisplay