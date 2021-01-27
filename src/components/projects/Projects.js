import React from "react";
import ProjectItem from "../projectItem/ProjectItem";

// styles
import "./Projects.css";
import projectImageOne from "../../resources/images/projects/myAmazingShop.png";
import projectImageTwo from "../../resources/images/projects/soccerTime.png";
import projectImageThree from "../../resources/images/projects/readeo.png";
import projectImageFour from "../../resources/images/projects/jsTetris.png";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h1>Projects</h1>
			<div className="projects__container">
				<ProjectItem
					thumbnail={projectImageOne}
					altName={"myAmazingShop"}
					title={"my Amazing Shop"}
					description={
						"An e-commerce web application, with purchase option and orders history."
					}
					hideRedux
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageTwo}
					altName={"soccerTime"}
					title={"Soccer Time"}
					description={
						"Get and check your favorites leagues and teams."
					}
					hideFirestore
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageThree}
					altName={"readeo"}
					title={"Readeo"}
					description={
						"Search youtube for interesting movies and add them to your favorites."
					}
					hideRedux
					hideFirebase
					hideFirestore
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={projectImageFour}
					altName={"tetrisJS"}
					title={"Tetris JS"}
					description={
						"A well known tetris game. Made in pure JavaScript."
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
