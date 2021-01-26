import React from "react";

// components
import Skill from "../skill/Skill";

// styles
import "./Skills.css";

const Skills = () => {
	return (
		<section className="skills">
			<div className="skills__text">
				<h2>Skills</h2>
				<p>
					Languages and Technologies that I have
					learned and applied to my projects.
				</p>
			</div>
			<div className="skills__wrapper">
				<Skill
					name={"visualstudiocode"}
					description={"VS Code"}
				/>
				<Skill name={"html5"} description={"HTML 5"} />
				<Skill
					name={"sass"}
					description={"Sass(Scss)"}
				/>
				<Skill name={"css3"} description={"CSS 3"} />
				<Skill
					name={"bootstrap"}
					description={"Bootstrap 4"}
				/>
				<Skill
					name={"javascript"}
					description={"JavaScript"}
				/>
				<Skill name={"react"} description={"React"} />
				<Skill
					name={"redux1"}
					description={"React-Redux"}
				/>
				<Skill
					name={"firebase"}
					description={"Firebase/Firestore"}
				/>
				<Skill name={"git"} description={"Git"} />
				<Skill name={"github"} description={"Github"} />
			</div>
		</section>
	);
};

export default Skills;
