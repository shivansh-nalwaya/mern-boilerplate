import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Home from "./routes/Home";
import Counter from "./routes/Counter";
import Backend from "./routes/Backend";
import { GraphQLEndpoint } from "./Constants";

const client = new ApolloClient({
  uri: GraphQLEndpoint
});

const AppRouter = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter/">Counter</Link>
            </li>
            <li>
              <Link to="/backend/">Backend</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/counter/" component={Counter} />
        <Route path="/backend/" component={Backend} />
      </div>
    </Router>
  </ApolloProvider>
);

export default AppRouter;
