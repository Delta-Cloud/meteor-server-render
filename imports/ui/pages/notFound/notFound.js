import React, { Component } from "react";
import { Helmet } from "react-helmet";

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404 PAGE</title>
          <meta content="404 PAGE" property="og:title" />
        </Helmet>
        <div>
          <h1>404 not found</h1>
        </div>
      </>
    );
  }
}

export default NotFoundPage;
