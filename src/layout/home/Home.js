// components
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Intro />
			<About />
			<Projects />
			<Skills />
		</div>
	);
};

export default Home;
