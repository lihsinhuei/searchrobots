import React from 'react';
import SearchBox from '../components/SearchBox';
import RobotsArea from '../components/RobotsArea';
import {robots} from '../components/robots';
import './App.css';


class App extends React.Component {
	constructor (){
		super();
		this.state = {
			// robots : robots,
			robots : [], 
			searchContent : '',
		}
	}


//callback function: update state searchContent 
	updateSearchContent = (event) =>{ 
		this.setState({searchContent:event.target.value}); 
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then((response)=>response.json())
		 .then((users) => this.setState({robots:users}));
	}

	render(){
		if(this.state.robots.length === 0){
			return <h1>loading</h1>
			//in case the fetching is too slow
		}else{
			let matching = this.state.robots.filter(robot =>{
      		return robot.name.toLowerCase().includes(this.state.searchContent.toLowerCase());
    	})

    	console.log(matching);
		return (
			<div> 
				<h1 className="tc">MY DEAR ROBOTS</h1>
				<SearchBox searchChange={this.updateSearchContent} />
				<div style = {{ "overflow": 'scroll', border: '1px solid gray', height: '800px', margin : "10px"}} >
					<RobotsArea robotsList={matching}/>
				</div>
			</div>
		);

		}

	}
}


export default App;
