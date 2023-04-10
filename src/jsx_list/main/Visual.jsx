import {Link} from 'react-router-dom'
import { useRef,useState,useEffect  } from "react";

function Visual() {
	const [Vis, setVis] = useState()
	const visual_content = useRef(null)
	console.log(Vis);
	useEffect(()=>{
		setVis(visual_content.current)
	},[]) 
	return (
		<article className='visual' ref={visual_content}>
		<Link to='/' onClick={(e)=>{e.preventDefault()}}>
		<img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="리엑트 아이콘" />
		</Link>
	</article>

	)
}

export default Visual