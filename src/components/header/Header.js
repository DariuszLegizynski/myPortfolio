import React from "react";

// tools
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// styles
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<Link className="link" to={"/"}>
					LOGO
				</Link>
			</div>
			<div className="header__navigation">
				<div className="header__navigation__item">
					<HashLink className="link" to="/#aboutMe">
						About me
					</HashLink>
				</div>
				<div className="header__navigation__item">
					<HashLink className="link" to="/#projects">
						Projects
					</HashLink>
				</div>
				<div className="header__navigation__item">
					<HashLink
						className="link"
						to="/#testimonials"
					>
						Testimonials
					</HashLink>
				</div>
				<div className="header__navigation__item">
					<HashLink className="link" to="/#contact">
						Contact
					</HashLink>
				</div>
				<div className="header__navigation__item">
					<a
						className="link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/DariuszLegizynski/myPortfolio"
						download
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
