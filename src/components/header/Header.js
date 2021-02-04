import React, { useState } from "react";

// components
import Burger from "../burger/Burger";

// tools
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// styles
import "./Header.css";
import sprites from "../../resources/icons/sprite.svg";

const Header = () => {
	const [openBurger, setOpenBurger] = useState(false);

	let burgerClass = "";
	if (openBurger) {
		burgerClass = "--open";
	}

	return (
		<header className="header">
			<div className="header__logo">
				<Link className="link link--page" to={"/"}>
					LD
				</Link>
			</div>
			<div
				className="header__wrapper"
				onClick={() => setOpenBurger(!openBurger)}
			>
				<Burger burgerClass={burgerClass} />
				<ul
					className={`header__navigation${burgerClass}`}
				>
					<div className="header__navigation__item fadeInFromTop">
						<HashLink
							className="link link--page"
							to="/#about"
						>
							About Me
						</HashLink>
					</div>
					<div className="header__navigation__item fadeInFromTop">
						<HashLink
							className="link link--page"
							to="/#projects"
						>
							Projects
						</HashLink>
					</div>
					<div className="header__navigation__item fadeInFromTop">
						<HashLink
							className="link link--page"
							to="/#skills"
						>
							Skills
						</HashLink>
					</div>
					<div className="header__navigation__item fadeInFromTop">
						<HashLink
							className="link link--page"
							to="/#testimonials"
						>
							Testimonials
						</HashLink>
					</div>
					<div className="header__navigation__item fadeInFromTop">
						<HashLink
							className="link link--page"
							to="/#contact"
						>
							Contact
						</HashLink>
					</div>
					<div className="header__navigation__item fadeInFromTop">
						<a
							className="link link--page"
							target="_blank"
							rel="noreferrer"
							href="/Resume/Dariusz_Legizynski_CV_DE.pdf"
							download
						>
							Resume (CV)
							<svg className="header__navigation__item__icon icon--download icon">
								<use
									href={
										sprites +
										"#icon-download"
									}
								/>
							</svg>
						</a>
					</div>
				</ul>
			</div>
		</header>
	);
};

export default Header;
