import React from 'react';

const SearchBox = ({searchChange}) => {
		return (
			<div className="tc">
				<input  onChange = {searchChange} type='search' placeholder="search robot" />
			</div>
		)
}


export default SearchBox;