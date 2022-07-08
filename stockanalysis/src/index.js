import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CandleDisplay from './pages/CandleDisplay'
import Tables from'./pages/Tables';
import NewsBoard from './pages/NewsBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="NewsBoard" element={<NewsBoard/>} />
        <Route path="Tables" element={<Tables/>} />
        <Route path="CandleDisplay" element={<CandleDisplay/>} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


