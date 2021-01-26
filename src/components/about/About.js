import React from "react";

// style
import "./About.css";
import myPicture from "../../resources/images/myself/me.png";
import icon from "../../resources/icons/sprite.svg";

const About = () => {
	return (
		<section className="about" id="about">
			<img
				className="about__my-picture"
				src={myPicture}
				alt="me"
			/>
			<div className="about__text">
				<h2 className="h2">
					Hello! I'm
					<br />
					Dariusz Legizynski,
				</h2>
				<h3 className="h2">
					A React Front-End developer from Wiener
					Neustadt, AT.
				</h3>
				<p className="p">Lorem ipsum</p>
				<p className="p">
					I decided to take my passion seriously and
					develop my programming skills. Each day I
					spent coding was a joyful day for me
					exploring new areas. I like taking on new
					challenges.
				</p>
			</div>
			<div className="about__contact">
				<ul>
					<h6>
						<a
							className="link link--contact"
							target="_blank"
							rel="noreferrer"
							href="tel:+4367762406805"
						>
							<svg className="icon">
								<use
									href={icon + "#icon-phone"}
								/>
							</svg>
							tel: +4367762406805
						</a>
					</h6>
					<h6>
						<a
							className="link link--contact"
							target="_blank"
							rel="noreferrer"
							href="mailto:d.legizynski@gmail.com"
						>
							<svg className="icon">
								<use
									href={
										icon + "#icon-envelope-o"
									}
								/>
							</svg>
							d.legizynski@gmail.com
						</a>
					</h6>
					<h6>
						<a
							className="link link--contact"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/DariuszLegizynski"
						>
							<svg className="icon">
								<use
									href={icon + "#icon-github"}
								/>
							</svg>
							github.com/DariuszLegizynski
						</a>
					</h6>
					<h6>
						<a
							className="link link--contact"
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/dariuszlegizynski/"
						>
							<svg className="icon">
								<use
									href={
										icon +
										"#icon-linkedin-square"
									}
								/>
							</svg>
							in/dariuszlegizynski/
						</a>
					</h6>
				</ul>
			</div>
		</section>
	);
};

export default About;
