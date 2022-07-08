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
                
                {/* <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default NewsBoard;