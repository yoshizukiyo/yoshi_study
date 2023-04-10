import Header from './Header';
import Article from './components/Article';
import Visual from './main/Visual';
import Functions from './Functions';
import { useState, useEffect, useRef } from 'react';

function Main() {
	// const [Vis, setVis] = useState([])
	// let Visual_offset = useRef(null)
	useEffect(()=>{
	},[])

	// console.log(Visual_offset);
	return (
		<>
			<main>
				<Header type={'main'} />
				<Visual />
				<Article />
				<Functions />
			</main>
		</>
	)
}

export default Main;