import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [counter, setCounter] = useState(50);

  return (
    <>
      <Helmet>
        <title id="title">HOME PAGE</title>
        <meta content="HOME PAGE" property="og:title" />
      </Helmet>
      <div>
        <h1>Home Page w/ Counter</h1>
        <button onClick={() => setCounter((p) => p + 1)}>Click Me</button>
        <div>{counter}</div>
      </div>
    </>
  );
};

export default HomePage;
