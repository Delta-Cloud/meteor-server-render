import React from "react";
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import { StaticRouter } from "react-router";
import routes from "../imports/common/routes";
import { Helmet } from "react-helmet";

onPageLoad((sink) => {
  const context = {};

  const App = (props) => (
    <StaticRouter location={props.location} context={context}>
      {routes}
    </StaticRouter>
  );

  const render = renderToString(<App location={sink.request.url} />);

  // call Helmet.renderStatic() after ReactDOMServer.renderToString or ReactDOMServer.renderToStaticMarkup to get the head data for use in your prerender.
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();

  // default title if empty (server-render do not replace existing title)
  title === '<title data-react-helmet="true"></title>'
    ? sink.appendToHead(
        '<title data-react-helmet="true">METEOR SSR DEMO</title>'
      )
    : sink.appendToHead(title);

  sink.renderIntoElementById("title", helmet.title.toString());
  sink.appendToHead(helmet.meta.toString());

  sink.renderIntoElementById("app", render);
});
