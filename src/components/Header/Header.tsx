import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Header = () => {
	return (
	
		<main>
		<header>
			<img src="../src/img/header.png" alt=""/>
		 <nav>
      <Link to="/"> HOME </Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/add-new">ADD NEW</Link>
    	</nav> 
		</header>
		</main>
	

	
	
	)
}

export default Header 