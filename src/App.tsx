import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Work from "./pages/Work";

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/history">経歴</Link>
          </li>
          <li>
            <Link to="/skills">スキル</Link>
          </li>
          <li>
            <Link to="/works">実績</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route path="/works/:id">
            <Work />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
