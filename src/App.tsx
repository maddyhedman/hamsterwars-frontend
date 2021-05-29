import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import Add from './components/AddNew/Add'
import Battle from './components/Battle/Battle'
import {HamsterItem} from './components/Gallery/Gallery'


const HamsterData : HamsterItem[] = []

function App() {
  return (
    <Router>

    <div className="App">
   <Header/>
   <Switch>
 
			<Route path="/gallery" render ={() => < Gallery items ={ HamsterData }/>} />
			<Route path="/add-new"> < Add /> </Route>
      <Route path="/battle"> < Battle /> </Route>
      <Route path="/"> < Home /> </Route>
    
		</Switch>


      <Footer />
   
    </div>
    </Router>
  );
}

export default App;
