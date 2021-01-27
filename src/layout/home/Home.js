// components
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
