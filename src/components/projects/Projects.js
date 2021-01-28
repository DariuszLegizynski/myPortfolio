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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
						"A well known tetris game. Made in pure JavaScript."
					}
					descriptionLong={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
