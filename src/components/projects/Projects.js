import React from "react";
import ProjectItem from "../projectItem/ProjectItem";

// styles
import "./Projects.css";
import mainImageOne from "../../resources/images/projects/large/myAmazingShopLarge.png";
import mainImageTwo from "../../resources/images/projects/large/soccerTimeLarge.png";
import mainImageThree from "../../resources/images/projects/large/wi-magLarge.png";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h1>Projects</h1>
			<div className="projects__container">
			<ProjectItem
					thumbnail={mainImageThree}
					large={mainImageThree}
					altName={"Wi-Mag"}
					title={"Wi-Mag"}
					linkLive={
						"https://wi-mag-7587c.web.app/home"
					}
					linkGithub={"wi-mag"}
					description={"Webpage for a company who sells racks. Written with Vue3js Composition API"}
					descriptionLong={
						"This web application has been written with Vue3js Composition API. It was made for a company who sells racks and wanted to present its products."
					}
					hideReact
					hideRouter
					hideRedux
					Sass
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={mainImageOne}
					large={mainImageOne}
					altName={"myAmazingShop"}
					title={"my Amazing Shop"}
					linkLive={
						"https://myamazingshop-ae51c.web.app/"
					}
					linkGithub={"myAmazingShop"}
					description={
						"An e-commerce web application, with purchase option and order history."
					}
					descriptionLong={
						"myAmazingShop is a simulated, e-commerce website. Built using React.js on the front-end, useContext and useReducer for state management and Node/Express on the back-end. Product data is fetched from cloud Firestore and purchase history is stored there. Alghough transactions are possible, they serve only demonstrational purpose."
					}
					hideRedux
					hideVue
					hideVueRouter
					hideJS
					hideBootstrap
				/>
				<ProjectItem
					thumbnail={mainImageTwo}
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
					hideVue
					hideVueRouter
					hideJS
					hideBootstrap
				/>

			</div>
		</section>
	);
};

export default Projects;
