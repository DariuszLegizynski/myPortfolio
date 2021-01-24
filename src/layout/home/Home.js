// components
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

// styles
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Intro />
			this is the home page.
		</div>
	);
};

export default Home;
