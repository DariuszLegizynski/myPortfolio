import React from "react";

// styles
import sprites from "../../resources/icons/sprite.svg";

const Skills = () => {
	return (
		<section className="skills">
			<div className="skills__text">
				<h2>Skills</h2>
				<p>
					Languages and Teechnoologies that I have
					learned and applied to my projects.
				</p>
			</div>
			<div className="skills_wrapper">
				<div className="skills_wrapper__skill">
					<svg className="skills__wrapper__skill__icon icon">
						<use
							href={sprites + "#icon-javascript"}
						/>
					</svg>
					<h5>JavaScript</h5>
				</div>
			</div>
		</section>
	);
};

export default Skills;
