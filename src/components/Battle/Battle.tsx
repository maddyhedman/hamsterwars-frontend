import {useEffect, useState} from 'react'
import './Battle.css'
import { Hamster } from '../../types/Hamster'
import BattleItem from './BattleItem'


const Battle = () => {
	//HAMSTER OBJECTS
	const [hamster1, setHamster1] = useState<null | Hamster>(null)
	const [hamster2, setHamster2] = useState<null | Hamster>(null)
	
	//HAMSTER STATS
	const [hamster1Stats, setHamster1Stats] = useState(false)
	const [hamster2Stats, setHamster2Stats] = useState(false)

	//STATE FOR HIDING BUTTON AFTER VOTING
	const [show, setShow] = useState (true)



	//Get RANDOM HAMSTER
	async function getRandomHamsters() {
			const response1 = await fetch('/hamsters/random', { method: 'GET' })
			const response2 = await fetch('/hamsters/random', { method: 'GET' })
			const data1 = await response1.json()
			const data2 = await response2.json()
	
		//COMPARE THE TWO OBJECTS TO AVOID DUPLICATES
		if(data1.id === data2.id) {
			getRandomHamsters()
		} else {
			setHamster1(data1)
			setHamster2(data2)
		}
		
	
	}



	useEffect(() => {
			getRandomHamsters()
		},[])


		const newBattle = () => {
			getRandomHamsters()
			setShow(true)
			setHamster1Stats(false)
			setHamster2Stats(false)
		}

		//THE FIRST HAMSTER OBJECT WHEN ONCLICK
		async function voteHamster1() {
			if(!hamster1 || !hamster2) {
				return
			}
			setHamster1({
				...hamster1,
				wins: hamster1.wins + 1,
				games: hamster1.games + 1
			})
			setHamster2({
				...hamster2,
				defeats: hamster2.defeats + 1,
				games: hamster2.games + 1
			})
			const changeWinner = {
				wins: hamster1.wins + 1,
				games: hamster1.games + 1
			} 
	
			const changeLoser = {
				defeats: hamster2.defeats + 1,
				games: hamster2.games + 1
			}
				
		
			setHamster1Stats(true)
			setShow(false)
		

			await fetch('/hamsters/'+hamster1.id , { 
			method: 'PUT', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(changeWinner) });
			
			
			await fetch('/hamsters/'+hamster2.id , { 
			method: 'PUT', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(changeLoser) });
		}
			

	
		//THE FIRST HAMSTER OBJECT WHEN ONCLICK
		async function voteHamster2() {
			if(!hamster1 || !hamster2) {
				return
			}
			setHamster2({
				...hamster2,
				wins: hamster2.wins + 1,
				games: hamster2.games + 1
			})
	
			setHamster1({
				...hamster1,
				defeats: hamster1.defeats + 1,
				games: hamster1.games + 1
			})
	
			const changeWinner = {
				wins: hamster2.wins + 1,
				games: hamster2.games + 1
			} 
	
	
			const changeLoser = {
				defeats: hamster1.defeats + 1,
				games: hamster1.games + 1
			}
				
			setHamster2Stats(true)
			setShow(false)

			await fetch('/hamsters/'+hamster1.id , { 
			method: 'PUT', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(changeWinner) });
			
			await fetch('/hamsters/'+hamster2.id , { 
			method: 'PUT', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(changeLoser) });
		}
					
		

		if(!hamster1 || !hamster2) {
			return(
				<div>Loading..</div>
			)
		}

		

	return(
		<div>
			<h1 className="Header-Battle">
				Welcome to Battle
			</h1> 
		<div className="battle">
			

			<div className="container1">
				<section className="Hamster-left">

					<img className="hamsterImg" src={`/img/${hamster1.imgName}`} alt="Hamster 1"/>
					<div className="HamsterInfo">
					<BattleItem hamster={hamster1}/>
                        { (hamster1Stats || hamster2Stats) && 
                            <div>
                                <p>WINS: {hamster1.wins}</p>
                                <p>DEFEATS: {hamster1.defeats}</p>
                                <p>GAMES: {hamster1.games}</p>
								
                            </div>
                        }
						
					</div> {show &&
			
					<button className="home-button" onClick={voteHamster1} > Vote </button>
				}
				</section>
		
				<div className="vs">
					<h2> Which one is the cutest?</h2>
				</div>

				<section className="Hamster-right"> 
					<img className="hamsterImg" src={`/img/${hamster2.imgName}`} alt="Hamster 2"/>
	
					<div className="HamsterInfo">
					<BattleItem hamster={hamster2}/>
						{ (hamster1Stats || hamster2Stats) &&
						 
                            <div>
                                <p>WINS: {hamster2.wins}</p>
                                <p>DEFEATS: {hamster2.defeats}</p>
                                <p>GAMES: {hamster2.games}</p>
                            </div>
                        }

					</div> { show && 
					<button className="home-button" onClick={voteHamster2}> Vote </button>
					}
				</section>
	
			</div>

		</div>		<button className="home-button" onClick={newBattle}   > Press here for a new game! </button>
		</div>
	)
}

export default Battle 