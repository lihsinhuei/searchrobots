import React from 'react';



const Card =({id,name,email}) => {
	return (
	<div className="fl w-50 w-50-m w-20-l pa2 dim">
		<img src={`https://robohash.org/${id}`} alt="a robot" className="w-100 db black-10 " />
		<dl className="mt2 f6 lh-copy tc ">
          <dd className="ml0 black truncate w-100">{name}</dd>
          <dd className="ml0 gray truncate w-100">{email}</dd>
        </dl>

	</div>
	);
}




export default Card;
