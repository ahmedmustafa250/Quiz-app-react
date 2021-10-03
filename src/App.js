import "./App.css";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
 import Quiz from "./components/Quiz/Quiz"
 import Error from "./components/Error/Error"
 import QuizResult from "./components/QuizResult/QuizResult"
 import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/Signup">
                <Signup/>
            </Route>
            <Route  exact 
                path="/Quiz"
                component={Quiz}
                // component={()=> <Quiz isAuthenticated={true} />}
            />
            <Route  exact 
                path="/QuizResult"
                component={QuizResult}
                // component={()=> <Quiz isAuthenticated={true} />}
            />
            <Route  path="*">
                <Error/>
            </Route>
        </Switch>

    </Router>
  );
}
