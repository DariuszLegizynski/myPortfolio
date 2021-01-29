import React from "react";
import ProjectItem from "../projectItem/ProjectItem";

// styles
import "./Projects.css";
import projectImageOne from "../../resources/images/projects/myAmazingShop.png";
import projectImageTwo from "../../resources/images/projects/soccerTime.png";
import projectImageThree from "../../resources/images/projects/readeo.png";
import projectImageFour from "../../resources/images/projects/jsTetris.png";
import mainImageOne from "../../resources/images/projects/large/myAmazingShopLarge.png";
import mainImageTwo from "../../resources/images/projects/large/soccerTimeLarge.png";
import mainImageThree from "../../resources/images/projects/large/readeoLarge.png";
import mainImageFour from "../../resources/images/projects/large/jsTetrisLarge.png";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h1>Projects</h1>
			<div className="projects__container">
				<ProjectItem
					thumbnail={projectImageOne}
					large={mainImageOne}
					altName={"myAmazingShop"}
					title={"my Amazing Shop"}
					linkLive={
						"https://myamazingshop-ae51c.web.app/"
					}
					linkGithub={"myAmazingShop"}
					description={
						"An e-commerce web application, with purchase option and orders history."
					}
					descriptionLong={
						"myAmazingShop is a simulated, e-commerce website. Built using React.js on the front-end, useContext and useReducer for state management and Node/Express on the back-end. Product data is fetched from cloud Firestore and purchase history is stored there. Alghough transactions are possible, they serve only demonstrational purpose."
					}
					hideRedux
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageTwo}
					large={mainImageTwo}
					altName={"soccerTime"}
					title={"Soccer Time"}
					linkLive={
						"https://soccer-time-ea700.web.app/home"
					}
					linkGithub={"SoccerTime"}
					description={
						"Get and check your favorites leagues and teams."
					}
					descriptionLong={
						"SoccerTime is a website that shows all the leagues and teams from diffrent countries. It uses react-redux for state managment and firebase for authentication."
					}
					hideFirestore
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageThree}
					large={mainImageThree}
					altName={"readeo"}
					linkLive={"https://readeo.netlify.app/"}
					linkGithub={"React-Movie_App"}
					title={"Readeo"}
					description={
						"Search youtube for interesting movies and add them to your favorites."
					}
					descriptionLong={
						"Readeo is a single-page application designed to help users find relevant videos on youtube and store them in custom lists."
					}
					hideRedux
					hideFirebase
					hideFirestore
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageFour}
					large={mainImageFour}
					altName={"tetrisJS"}
					title={"Tetris JS"}
					linkLive={
						"https://dariuszlegizynski.github.io/Tetris_WebApp/"
					}
					linkGithub={"Tetris_WebApp"}
					description={
						"Well known and loved tetris game."
					}
					descriptionLong={
						"This web application has been written in vanilla JavaScript."
					}
					hideReact
					hideRouter
					hideRedux
					hideSass
					hideFirebase
					hideFirestore
				/>
			</div>
		</section>
	);
};

export default Projects;
