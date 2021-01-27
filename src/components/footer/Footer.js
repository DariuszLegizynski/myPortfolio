import React from "react";

// styles
import "./Footer.css";
import icon from "../../resources/icons/sprite.svg";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__icons">
				<a
					className="link link--page"
					target="_blank"
					rel="noreferrer"
					href="tel:+4367762406805"
				>
					<svg className="icon icon--footer">
						<use href={icon + "#icon-phone"} />
					</svg>
				</a>
				<a
					className="link link--contact"
					target="_blank"
					rel="noreferrer"
					href="mailto:d.legizynski@gmail.com"
				>
					<svg className="icon icon--footer">
						<use href={icon + "#icon-envelope-o"} />
					</svg>
				</a>
				<a
					className="link link--contact"
					target="_blank"
					rel="noreferrer"
					href="https://github.com/DariuszLegizynski"
				>
					<svg className="icon icon--footer">
						<use href={icon + "#icon-github"} />
					</svg>
				</a>
				<a
					className="link link--contact"
					target="_blank"
					rel="noreferrer"
					href="https://codesandbox.io/u/DariuszLegizynski"
				>
					<svg className="icon icon--footer">
						<use href={icon + "#icon-codesandbox"} />
					</svg>
				</a>
				<a
					className="link link--contact"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/dariuszlegizynski/"
				>
					<svg className="icon icon--footer">
						<use
							href={icon + "#icon-linkedin-square"}
						/>
					</svg>
				</a>
			</div>
			<div className="footer__text">
				<p>&copy; 2021 Dariusz Legizynski.</p>
				<p>All rights reserved.</p>
			</div>
		</section>
	);
};

export default Footer;
