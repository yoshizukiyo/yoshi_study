import {useState,useEffect } from 'react'
import { Link , NavLink } from 'react-router-dom';
import axios from 'axios'

function Header({type}) {
	const [datas, setdatas] = useState([])
	
	useEffect(()=>{
		axios.get(`${process.env.PUBLIC_URL}/DB/menu.json`).then((data)=>{
			setdatas(data.data.menu)
		})
	},[])

	return (
		<>
			<header className={type}>
				<h1>
					<Link to='/'>로고</Link>
				</h1>
				<ul className='nav_menu'>
					{/*
					{datas.map((data,idx)=>{
						return (
							<li key={idx}>
								<NavLink to='/test' className='link'>{data.name}</NavLink> 탭기능
								<Link to='/sub1'>{data.name}</Link> 링크기능
							</li>
						)
					})}
					*/}

					{datas.map((data,idx)=>{
						return (
							<li key={idx}>
								<NavLink to={`/${data.name}`} className='link' activeStyle={{color:'red'}}>{data.name}</NavLink> {/*탭기능*/}
							</li>
						)
					})}

				</ul>
			</header>
		</>
	)
}

export default Header