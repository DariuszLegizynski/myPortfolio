import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProjectOverview from "../../components/projectOverview/ProjectOverview";

const Projects = () => {
	return (
		<div>
			<Header />
			<ProjectOverview
				hideReact
				hideRouter
				hideRedux
				hideSass
				hideFirebase
				hideFirestore
				hideJS
				hideBootstrap
			/>
			<Footer />
		</div>
	);
};

export default Projects;
