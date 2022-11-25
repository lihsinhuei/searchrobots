import React,{useState,useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import RobotsArea from '../components/RobotsArea';
import {robots} from '../components/robots';
import './App.css';


const App = () =>{
	const [robots,setRobots] = useState([]);
	const [searchContent,setSearchContent] = useState('');


//callback function: update state searchContent 
	const updateSearchContent = (event) =>{ 
		setSearchContent(event.target.value); 
	}

	useEffect(()=>{

		fetch('https://jsonplaceholder.typicode.com/users')
		 .then((response)=>response.json())
		 .then((users) => setRobots(users));


	},[]); //by adding empty array as a second argument, this useEffect works exactly like componentDidMount: only run this useEffect once after the first render. 

	if(robots.length === 0){
		return <h1>loading</h1>
		// in case the fetching is too slow
	}else{
		let matching = robots.filter(robot =>{
  		return robot.name.toLowerCase().includes(searchContent.toLowerCase());
	})


	return (
		<div> 
			<h1 className="tc">MY DEAR ROBOTS</h1>
			<SearchBox searchChange={updateSearchContent} />
			<div style = {{ "overflow": 'scroll', border: '1px solid gray', height: '800px', margin : "10px"}} >
				<RobotsArea robotsList={matching}/>
			</div>
		</div>
	);

	}

}


export default App;
