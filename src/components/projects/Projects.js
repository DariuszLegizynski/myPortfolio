import React from "react";

// styles
import "./Projects.css";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h1>Projects</h1>
			<div className="projects__container">
				<div className="projects__container__project">
					<div className="projects__container__project__img">
						<img
							src=""
							alt="myAmazingShop_project_thumbnail"
						/>
					</div>
					<div className="projects__container__project__text">
						<h3>myAmazinShop</h3>
						<span>
							An e-commerce web application made
							based on amazon's functionality
						</span>
						<div>
							<ul>
								<li>REACTJS</li>
								<li>REACT ROUTER</li>
								<li>SASS</li>
								<li>FIREBASE</li>
								<li>FIRESTORE</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="projects__container__project">
					<div className="projects__container__project__img">
						<img
							src=""
							alt="soccer-time_project_thumbnail"
						/>
					</div>
					<div className="projects__container__project__text">
						<h3>myAmazinShop</h3>
						<span>
							A web application made to view all
							the football leagues and teams and
							also the upcoming and past events.
						</span>
						<div>
							<ul>
								<li>REACTJS</li>
								<li>REACT ROUTER</li>
								<li>REDUX</li>
								<li>SASS</li>
								<li>FIREBASE</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="projects__container__project">
					<div className="projects__container__project__img">
						<img
							src=""
							alt="readeo_project_thumbnail"
						/>
					</div>
					<div className="projects__container__project__text">
						<h3>Readeo</h3>
						<span>
							A web application made to search and
							view youtube videos. Favorited ones
							can be saved on created lists and
							watched later on.
						</span>
						<div>
							<ul>
								<li>REACTJS</li>
								<li>REACT ROUTER</li>
								<li>SASS</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="projects__container__project">
					<div className="projects__container__project__img">
						<img
							src=""
							alt="tetrs_project_thumbnail"
						/>
					</div>
					<div className="projects__container__project__text">
						<h3>TetrisJS</h3>
						<span>
							A well known game made in pure
							Javascript: Tetris.
						</span>
						<div>
							<ul>
								<li>Javascript</li>
								<li>Bootstrap 4</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
