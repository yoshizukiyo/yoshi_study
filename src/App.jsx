import { Route,Switch } from "react-router-dom";

// common
import Header from "./jsx_list/Header";
import Footer from "./jsx_list/Footer";

// main
import Main from "./jsx_list/Main";

// sub
import Department from "./jsx_list/components/Department";
import Article from "./jsx_list/components/Article";
import Youtube from "./jsx_list/components/Youtube";

// css
import './scss/style.scss'

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={()=><Header type={'sub'}/>} />
			</Switch>

			<Route path='/article' component={Article} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Footer />
		</>
	)
}

export default App;
