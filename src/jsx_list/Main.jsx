import Header from './Header';
import Article from './components/Article';
import Visual from './main/Visual';
import Functions from './Functions';
import { useState, useEffect, useRef } from 'react';

function Main() {
	const [data, setdata] = useState()
	console.log(data);
	return (
		<>
			<main>
				<Header type={'main'} />
				<Visual setdata={setdata} />
				<Article data={data} />
				<Functions />
			</main>
		</>
	)
}

export default Main;