import Header from './Header';
import Article from "./components/Article";
import Department from "./components/Department";

function Main() {
	return (
		<>
			<main>
				<Header type={'main'} />
				<Article />
				<Department />
			</main>
		</>
	)
}

export default Main;