import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Hamsterwars from '../img/home.jpg'
import Hamster from '../../img/hamsterimg.jpg';

const Header = () => {
	return (
	
		
		<header className="header">
			<div className="header-img">
		<img src={Hamster} alt="img of hamster" />
			</div>
		 <nav>
		
      <Link to="/"> HOME </Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/add-new">ADD NEW</Link>
    	</nav> 
		</header>

	

	
	
	)
}

export default Header 