import React from "react";

// tools
import { HashLink } from "react-router-hash-link";

// styles
import "./Intro.css";
import myPicture from "../../resources/images/myself/me.png";

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro__wrapper">
				<img
					className="intro__wrapper__my-picture"
					src={myPicture}
					alt="me"
				/>
				<div className="intro__wrapper__text">
					<h1>
						Hello, I'm{" "}
						<span>Dariusz Legizynski</span>
						.<br />
						I'm a front-end web developer.
					</h1>
					<p className="intro__wrapper__text__p p">
						I decided to take my passion seriously
						and develop my programming skills. Each
						day I spent coding was a joyful day for
						me exploring new areas. I like taking on
						new challenges. I will not rest until I
						solve them.
					</p>
				</div>
				<div className="intro__wrapper__projects">
					<HashLink className="link" to="/#projects">
						Projects
					</HashLink>
				</div>
			</div>
		</section>
	);
};

export default Intro;
