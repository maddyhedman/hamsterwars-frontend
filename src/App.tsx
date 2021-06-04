import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import Add from './components/AddNew/Add'
import Battle from './components/battle/Battle'
import axios from 'axios'





function App() {

  axios.get('/hamsters')
  .catch(function(error){
    if(error.response){
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } 
  });




  return (
    <Router>

    <div className="App">
    <Header/> 
  
     <Switch>
 
			<Route path="/gallery"> < Gallery/> </Route>
      
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
