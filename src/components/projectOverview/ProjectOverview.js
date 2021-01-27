import React from "react";
import { Link } from "react-router-dom";

const ProjectOverview = ({
	hideReact,
	hideRouter,
	hideRedux,
	hideSass,
	hideFirebase,
	hideFirestore,
	hideJS,
	hideBootstrap,
}) => {
	return (
		<section className="overview">
			<div className="overview__presentation">
				<div className="overview__presentation__intro">
					<h1>Projects Title</h1>
					<div className="overview__presentation__intro__text">
						<img src="" alt="" />
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis
							aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</div>
				</div>
				<div className="overview__links">
					<a
						className="link link--page"
						target="_blank"
						rel="noreferrer"
						href="live"
						download
					>
						<button
							className="btn--projects btn"
							tabIndex="-1"
						>
							Live
						</button>
					</a>
					<a
						className="link link--page"
						target="_blank"
						rel="noreferrer"
						href="Github"
						download
					>
						<button
							className="btn--projects btn"
							tabIndex="-1"
						>
							GitHub
						</button>
					</a>
				</div>
			</div>
			<div className="overview__skills">
				<h1>Used Technologies:</h1>
				<ul>
					{!hideReact && <li>REACTJS</li>}
					{!hideRouter && <li>REACT ROUTER</li>}
					{!hideRedux && <li>REDUX</li>}
					{!hideSass && <li>SASS</li>}
					{!hideFirebase && <li>FIREBASE</li>}
					{!hideFirestore && <li>FIRESTORE</li>}
					{!hideJS && <li>JAVASCRIPT</li>}
					{!hideBootstrap && <li>BOOTSTRAP 4</li>}
				</ul>
			</div>
			<Link to={"/"}>&barr; Back</Link>
		</section>
	);
};

export default ProjectOverview;
