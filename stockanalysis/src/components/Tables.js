const Tables = ({ finalItem }) => {
    const open = finalItem.ChartOpenValues
    const high = finalItem.ChartHighValues
    const low = finalItem.ChartLowValues
    const close = finalItem.ChartCloseValues

    console.log(open)
    console.log(high)
    console.log(low)
    console.log(close)

    return (
        <table class="table-fixed">
            <thead>
                <tr>
                    <th>open prices</th>
                    <th>high prices</th>
                    <th>low prices</th>
                    <th>close prices</th>
                </tr>
            </thead>
           
                    <tbody>
                        {open.map((o,index)=>{
                            return <tr key={index}>{o}</tr>
                        })}
                         {high.map((o,index)=>{
                            return <tr key={index}>{o}</tr>
                        })}
                         {low.map((o,index)=>{
                            return <tr key={index}>{o}</tr>
                        })}
                         {close.map((o,index)=>{
                            return <tr key={index}>{o}</tr>
                        })}
                    </tbody>
           
        </table>

    )

}

export default Tables;