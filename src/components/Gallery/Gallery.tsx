import './Gallery.css'
import { useEffect, useState } from 'react'
import { Hamster } from '../../types/Hamster'
import {  Link} from "react-router-dom";




const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)

	 async function getHamsters() {
            const response = await fetch('/hamsters', { method: 'GET' })
            const data: Hamster[] = await response.json()
            setHamsters(data)
		}
		

	useEffect(() => {
       
        getHamsters()
        
	}, [])

    async function deleteHamsters(id:string) {
		await fetch('/hamsters/' + id, { method: 'DELETE' })
           
			getHamsters()
			
        }
     

	return (
		<div>
			<Link to="/add-new"><button className="home-button">Add Hamster</button></Link>
			<section className="container">
				
			{hamsters ? hamsters.map(hamster => (
					<div key={hamster.id}>
				      <div className="gallery-btn">
						<button 
							onClick= {() => deleteHamsters(hamster.id)}>
							<strong>X</strong>
						</button>
						</div>
						<div className="image">		
					
						
						<img className="img" src={`img/${hamster.imgName}`}  alt="hamster bild"/>
							<div className="infoOnHover">
							<p>Age: {hamster.age}</p>
							<p>Favfood:{hamster.favFood}</p>
							<p>Loves:{hamster.loves}</p>
							<p>Defeats:{hamster.defeats}</p>
							<p>Games{hamster.games}</p>
							</div>
						</div> <br/>
						<p><strong>Hover over for info</strong></p>
				
						<p>Name:{hamster.name} </p><br/>
						
						
					</div>
				))
				:  'Hämtar hamsters från API...'
			}
			</section>
		</div>
	)
}

export default Gallery