import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Header = () => {
	return (
	
		
		<header className="header">
		 <img src={require("/Users/maddyhedman/Desktop/frontend projekt/hamsterwars-frontend/src/img/header.png")} alt="bild"/>
		 <nav>
		
      <Link to="/"> HOME </Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/add-new">ADD NEW</Link>
    	</nav> 
		</header>

	

	
	
	)
}

export default Header 