
import './App.css';
import TableComponent from './components/table-component';
import { Link, NavLink, Route, Switch } from "react-router-dom";
import LoginComponent from './components/login-component';

// import {Table} from './Table';

function App() {
  
  return (
    <div className="App">
      <header>
        <div>
          <div>
            <NavLink to="/" style={{ marginRight: "10px" }}>
              <button>Login Page</button>
            </NavLink>
           
          </div>
        </div>
      </header>
     
      <Switch>
        <Route path="/" exact component={LoginComponent}></Route>
        <Route path="/table-view" component={TableComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
