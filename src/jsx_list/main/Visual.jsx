import {Link} from 'react-router-dom'
import { useRef,useState,useEffect } from "react";

function Visual({setdata}) {
	const content = useRef(null)
	const [log, setlog] = useState()
	useEffect(()=>{
		setlog(content.current)
	},[])
	setdata(log)

	return (
		<>
		<article className='visual'>
			<Link ref={content} to='/' onClick={()=>{test()}} >
			<img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="리엑트 아이콘" />
			</Link>
		</article>
		</>

	)
}

export default Visual