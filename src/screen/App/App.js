import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import history from "../../utils/history";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import MainFrame from "../../component/MainFrame";
import Messenger from "../../component/Messenger";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className="app">
            <MainFrame>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/messenger" component={Messenger} />
                <Route path="/home" component={Home} />
                <Redirect from="*" to="/home" />
              </Switch>
            </MainFrame>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
