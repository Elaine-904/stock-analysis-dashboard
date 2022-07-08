import 'tw-elements';
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
function NewsBoard() {
    const [news, setNews] = useState([])
    const url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=LL62LSLMAKSWGG1L"
    useEffect(() => {
        axios.request(url)
            .then(response => { return response.data; })
            .then(data => {
                console.log(data)
                const metaData = data.feed
                setNews(metaData)
                console.log(news);
            }).catch(error => console.log(`erros:${error}`))
    }, [])


    return (
        <div class="container">
            <div class="grid gap-8 grid-cols-3 mt-5 ">
                {news.map((c, index) => {
                    return (
                        <div key={index} class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img class="rounded-t-lg" 
                                    src={c.banner_image}
                                    alt={`the news title is ${c.title}`} />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">{c.title}</h5>
                                    <h6 class="text-gray-500 text-xl font-medium mb-2">{c.authors}</h6>
                                    <p class="text-gray-700 text-base mb-4">
                                      {c.summary}
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default NewsBoard;