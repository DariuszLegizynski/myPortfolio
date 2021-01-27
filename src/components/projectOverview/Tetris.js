import React from "react";

// tools
import { Link } from "react-router-dom";

// styles
import image from "../../resources/images/projects/Large/tetrisJS.png";
import "./ProjectOverview.css";

const Tetris = () => {
	return (
		<section className="overview">
			<div className="overview__presentation">
				<div className="overview__presentation__intro">
					<h1>Soccer Time</h1>
					<div className="overview__presentation__intro__text">
						<img src={image} alt="tetrisJS" />
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
					<li>JAVASCRIPT</li>
					<li>BOOTSTRAP 4</li>
				</ul>
			</div>
			<Link className="link" to={"/"}>
				&larr; Back
			</Link>
		</section>
	);
};

export default Tetris;
