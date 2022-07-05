import React from "react";
import Fetch from "./components/Fetch";




function App() {
  return (
   <body className="flex flex-col h-screen">
    <header className="transform p-5 bg-blue-300 transition duration-500 hover:bg-blue-800">
      <h1 className="text-2xl md:text-4xl">STOCK ANLYSIS DASHBOARD</h1>
    </header>
    <div className=" my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <Fetch className="md:w-2/3 lg:w-3/4 px-5 py-40"/>
      <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
    </div>
    <footer className="text-gray-500 dark:text-gray-400 mt-auto p-5">
          <div className="text-center text-xs p-2">
            Made with TailwindCSS by <a target="_blank" rel="noreferrer" href="https://hellojuninguyen.netlify.app/">elainehe.</a>
            </div>
        </footer>
    </body>
  );
}

export default App;