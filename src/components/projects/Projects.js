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
						"An e-commerce web application, based on amazon's functionality."
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
