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
				<Link className="link" to={"/"}>
					LOGO
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
					<div className="header__navigation__item">
						<HashLink
							className="link"
							to="/#aboutMe"
						>
							About me
						</HashLink>
					</div>
					<div className="header__navigation__item">
						<HashLink
							className="link"
							to="/#projects"
						>
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
						<HashLink
							className="link"
							to="/#contact"
						>
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
