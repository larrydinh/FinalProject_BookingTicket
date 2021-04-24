
import "./App.scss";
// import "./scss/main.scss"
// import "./css/plugins.css";
// import "./css/style.css"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Test1 from "./components/Test_01/Test1";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/test" component={Test1} />
          {/* default page  */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
