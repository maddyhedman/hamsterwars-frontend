import Hamster from '../../img/home.jpg';
import './Home.css';
import { Link } from "react-router-dom";



const Home = () => {


	
	

	return(
	<div className="home-container">
		<div className="home-text">
			<br/>
			<br/>
			<h1>Welcome to Hamsterwars!
		 	</h1>
			<h2>
				<br/>
			Here you can battle <br/> for the cutest hamster or <br/> watch all the hamsters 
				<br/> available in our gallery!
			</h2>	
				<div className="btn-container">
					<Link to="/battle"><button className="home-button">BATTLE</button></Link>
	    			<Link to="/gallery"><button className="home-button">GALLERY</button>  </Link> 
				</div>
		</div>
	
		  
			<img src={Hamster} alt="img of hamster" className="Hamster-img"/>
		
	</div>
	)
}

export default Home 