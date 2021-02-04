import React from "react";

// tools
import { HashLink } from "react-router-hash-link";

// style
import "./About.css";
import myPicture from "../../resources/images/myself/DariuszLegizynski.png";
import icon from "../../resources/icons/sprite.svg";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__wrapper">
				<div className="about__wrapper__introduction">
					<img
						className="about__wrapper__introduction__my-picture"
						src={myPicture}
						alt="me"
					/>
				</div>
				<div className="about__wrapper__text">
					<div className="about__wrapper__text__title">
						<h2 className="h2">
							Hello! I'm
							<br />
							<span>Dariusz Legizynski</span>,
						</h2>
						<h3 className="h2">
							A React Front-End developer <br />
							from Wiener Neustadt, AT.
						</h3>
					</div>
					<div className="about__wrapper__text__description">
						<p className="p">
							After graduating with a bachelor's in
							electronics and telecomunication, I
							found myself in a stable career as a
							hardware developer in various
							companies. While the idea of working
							in the electronics area was great, I
							love to spent my free time while
							programming. One day I realized, that
							althought I still liked my job, I was
							not developing in this area anymore.
							All my effort was put into learning
							more and more about web development.
							This was the moment, when I decided
							to take a leap of faith and made a
							switch in careers.
						</p>
						<p className="p">
							Since then I started my journey as a
							self-taught web developer. I have
							developed a strong understanding of
							JavaScript, React, HTML5 and CSS3. I
							found my hardware developer skills to
							be very usefull when it comes to
							problem solving and pushing projects
							forward. I enjoy learning new
							technologies and afterwards to share
							my knowledge with others.
						</p>
						<p className="p">
							Feel free to connect with me. Let's
							talk about web dev, tech, nice places
							nearby or how I can be of help to
							your team or business. I'd love to
							get to know more developers and
							expand my network.
						</p>
					</div>
					<div className="about__wrapper__text__contact">
						<h3>Get in touch with me:</h3>
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
											href={
												icon +
												"#icon-phone"
											}
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
												icon +
												"#icon-envelope-o"
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
											href={
												icon +
												"#icon-github"
											}
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
									href="https://codesandbox.io/u/DariuszLegizynski"
								>
									<svg className="icon">
										<use
											href={
												icon +
												"#icon-codesandbox"
											}
										/>
									</svg>
									/u/DariuszLegizynski
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
				</div>
			</div>
			<div className="about__links">
				<a
					className="link link--page"
					target="_blank"
					rel="noreferrer"
					href="/Resume/Dariusz_Legizynski_CV_DE.pdf"
					download
				>
					<button
						className="btn--projects btn"
						tabIndex="-1"
					>
						Resume
					</button>
				</a>
			</div>
		</section>
	);
};

export default About;
