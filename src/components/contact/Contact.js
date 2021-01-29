import React from "react";

// styles
import "./Contact.css";
import icon from "../../resources/icons/sprite.svg";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<h1>Get in touch:</h1>
			<div className="contact__wrapper">
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
							u/DariuszLegizynski
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

export default Contact;
