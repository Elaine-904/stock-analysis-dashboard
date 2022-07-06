### stock-analysis-dashboard
use the AlphaVintage API, PlotlyJS library, TailWindCSS, Redux, CRA(create-react-app) based web application. It analysis on specific stocks under the AlphaVintage data source.
It still not finish, and pending to optimize in progress....

### Info
go to the root folder: stockanalysis
Install a local copy by downloading this library and running

    npm install

Launch a local development environment by running

    npm start

### Basic Concepts

**Component**

Components are split into several different parts
i. graph display 
-   Fetch (ancestor component--- fetch AlphaVintage api)
-   LineDisplay (display line graph)
-   CandleDisplay (display candlestick graph)
ii. theme control 
-   ThemeContext (for themecontext)
-   ThemeToggle (toggle for theme display)
-   Background (body background set)


