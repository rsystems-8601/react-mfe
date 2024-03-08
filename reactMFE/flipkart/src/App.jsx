import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
const BillhostApp = lazy(() => import("billhost/App"));
const ShiphostApp = lazy(() => import("shiphost/App"));
import Home from "./home";
import "./index.scss";
const btnclas =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Main Flipkart MFE</div>
    <BrowserRouter>
      <header className="App-header">
        <div>
          <div>header..........</div>
          <span className={btnclas}>
            <Link to="/billmfe"> Bill </Link>
          </span>
          <span className={btnclas}>
            <Link to="/shipmfe"> Ship </Link>
          </span>
          <span className={btnclas}>
            <Link to="/"> Home </Link>
          </span>
        </div>
      </header>
      <div>
        <div>Main..........</div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/shipmfe"
            element={
              <Suspense fallback={"Loading"}>
                <ShiphostApp />
              </Suspense>
            }
          />
          <Route
            exact
            path="/billmfe"
            element={
              <Suspense fallback={"Loading"}>
                <BillhostApp />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <div>Footer..........</div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
