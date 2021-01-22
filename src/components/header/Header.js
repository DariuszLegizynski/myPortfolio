import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<Link to={"/"}>LOGO</Link>
			</div>
			<div className="header__navigation">
				<HashLink to="/#aboutMe">About me</HashLink>
				<HashLink to="/#projects">Projects</HashLink>
				<HashLink to="/#testimonials">
					<p>Testimonials</p>
				</HashLink>
				<HashLink to="/#contact">Contact</HashLink>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/DariuszLegizynski/myPortfolio"
					download
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Header;
