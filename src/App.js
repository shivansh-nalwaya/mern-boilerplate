import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Counter from "./routes/Counter";

const AppRouter = () => (
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
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/counter/" component={Counter} />
    </div>
  </Router>
);

export default AppRouter;
