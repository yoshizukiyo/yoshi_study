import {useState,useEffect } from 'react'
import { Link , NavLink } from 'react-router-dom';
import axios from 'axios'

function Header() {
	const [datas, setdatas] = useState([])
	const nav_menu = ['메뉴1','메뉴2','메뉴3','메뉴4']
	const test = useEffect(()=>{
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data)=>{
			setdatas(data.data.members)
		})
	},[])
	console.log(datas);
	// useEffect(()=>{
	// 	console.log(datas);
	// },[])
	return (
		<>
			<header>
				<h1>로고</h1>
				<ul>
					{datas.map((data,idx)=>{
						return (
							<li key={idx}>
								<NavLink to='/test' className='link'>{data.name}</NavLink>
							</li>
						)
					})}
				</ul>
			</header>
		</>
	)
}

export default Header