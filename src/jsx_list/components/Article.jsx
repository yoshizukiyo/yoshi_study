function Article({data}) {
	console.log(data);
	return (
		<>
		{data}
		<div className='content-box'>
			<div className="box"></div>
			<div className="box"></div>
			<div className="box"></div>
		</div>
		</>
	)
}

export default Article