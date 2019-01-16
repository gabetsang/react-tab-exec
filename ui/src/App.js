import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <AppRouter />
      </div>
    );
  }
}

 
const Invited = () =>(
      <div className="card-container">
      
           <div className="card">
              
           </div>
      
      
      </div>


);
const Accepted = () => <h2>Accepted</h2>;

const AppRouter = () => (
  <Router basename="/leads/">
    <div>
      <nav>
        <ul>
           
          <li>
            <NavLink to="/Invited/" activeClassName="selected">Invited</NavLink>
          </li>
          <li>
            <NavLink to="/accepted/" activeClassName="selected">Accepted</NavLink>
          </li>
        </ul>
      </nav>

      <Route path="/" exact   render={() => (
          <Redirect to="/Invited"/>
      )}/>
      <Route path="/Invited" component={Invited} />
      <Route path="/accepted" component={Accepted} />
    </div>
  </Router>
);

export default App;
