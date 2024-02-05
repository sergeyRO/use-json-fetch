import "./App.css";
import "./main.css";
import "./components/Molecules/spinner.css";

import React from "react";
import SectionBlock from "./components/Sections/SectionBlock";
import Loading from "./components/Loading";
import Success from "./components/Success";
import Error from "./components/Error";

const USID = require("usid");
const usid = new USID();

export default function App() {
  return (
    <React.Fragment>
      
      <div key={usid.rand()} className="container">
      <h2 className="title">UseFetch</h2>
        <SectionBlock key={usid.rand()} className="requests">
          <Success
            key={usid.rand()}
            url={process.env.REACT_APP_BASE_URL + "/data"}
          ></Success>
          <Error
            key={usid.rand()}
            url={process.env.REACT_APP_BASE_URL + "/error"}
          ></Error>
          <Loading
            key={usid.rand()}
            url={process.env.REACT_APP_BASE_URL + "/loading"}
          ></Loading>
        </SectionBlock>
      </div>
    </React.Fragment>
  );
}


