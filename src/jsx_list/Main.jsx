import Header from './Header';
import Article from './components/Article';
import Visual from './main/Visual';
import Functions from './Functions';
import { useState, useEffect, useRef } from 'react';

function Main() {
const parent = (data)=>{
	console.log(data);
}

	return (
		<>
			<main>
				<Header type={'main'} />
				<Visual parent={parent} />
				<Article  />
				<Functions />
			</main>
		</>
	)
}

export default Main;