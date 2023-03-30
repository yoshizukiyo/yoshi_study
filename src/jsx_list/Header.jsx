import {useState,useEffect } from 'react'
import { Link , NavLink } from 'react-router-dom';
import axios from 'axios'

function Header() {
	const [datas, setdatas] = useState([])
	
	useEffect(()=>{
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data)=>{
			setdatas(data.data.members)
		})
	},[])
	console.log(datas);

	return (
		<>
			<header>
				<h1>로고</h1>
				<ul>
					{datas.map((data,idx)=>{
						return (
							<li key={idx}>
								<NavLink to='/test' className='link'>{data.name}</NavLink> {/* 탭기능 */}
								<Link to='/test2'>{data.name}</Link> {/* 링크기능 */}
							</li>
						)
					})}
				</ul>
			</header>
		</>
	)
}

export default Header