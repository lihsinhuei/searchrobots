import React from "react";
import Card from './Card';

const RobotsArea = ({robotsList}) => {

	return(
		<div>
		{
			robotsList.map((robot,i) => {
				// console.log(i);
				// return (
				// <div className="fl w-50 w-25-m w-20-l pa2" key={i}>
				// 	<img src={`https://robohash.org/${robot.id}`} alt="a robot" />
				// <div>
				// 	<h1>{robot.name}</h1>
				// 	<h2>{robot.email}</h2>
				// </div>
				// </div>
				// )
				return(
					<Card 
						key={i} 
						id={robot.id}
						name={robot.name}
						email={robot.email} 
					/>

				)
		
			})
		}
		
		</div>
	)

}




export default RobotsArea;