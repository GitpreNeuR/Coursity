import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search-here'>
			<MdSearch className='search-icons' size='2em' style={{float:`right`,position:`relative`,top:`3em`,right:`1em`}} />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
				style={{marginBottom:`3em`}}
			/>
		</div>
	);
};

export default Search;
