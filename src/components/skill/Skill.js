import React from "react";

// styles
import sprites from "../../resources/icons/sprite.svg";
import "./Skill.css";

const Skill = ({ name, description }) => {
	return (
		<div className="skills_wrapper__skill">
			<svg className="icon--skill icon">
				<use href={sprites + `#icon-${name}`} />
			</svg>
			<h5>{description}</h5>
		</div>
	);
};

export default Skill;
