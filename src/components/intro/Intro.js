import React from "react";

// tools
import { HashLink } from "react-router-hash-link";

// styles
import "./Intro.css";

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro__wrapper">
				<div className="intro__wrapper__text">
					<h2>
						Hello, I'm
						<br />
						<span>Dariusz Legizynski</span>.
					</h2>
					<h3>A front-end web developer.</h3>
				</div>
				<div className="intro__wrapper__projects">
					<HashLink className="link" to="/#projects">
						<button
							className="btn--projects btn"
							tabIndex="-1"
						>
							Projects
						</button>
					</HashLink>
				</div>
			</div>
		</section>
	);
};

export default Intro;
