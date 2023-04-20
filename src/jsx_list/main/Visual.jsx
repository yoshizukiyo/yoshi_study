import {Link} from 'react-router-dom'
import { useRef,useState,useEffect } from "react";

function Visual({setdata}) {
	const content = useRef(null)
	// const [log, setlog] = useState()
	useEffect(()=>{
		// content.current = [];
		// setlog(content.current)
		setdata(content.current)
	},[])

	return (
		<>
		<article className='visual'>
			<Link ref={content} to='/' >
			<img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="리엑트 아이콘" />
			</Link>
		</article>
		</>

	)
}

export default Visual