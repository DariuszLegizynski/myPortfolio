import React from "react";

// styles
import "./Testimonial.css";

const Testimonial = ({ description, title }) => {
	return (
		<div className="testimonial__text">
			<p>{description}</p>
			<h4>{title}</h4>
			<a
				className="link"
				target="_blank"
				rel="noreferrer"
				href="https://github.com/DariuszLegizynski"
			>
				link
			</a>
		</div>
	);
};

export default Testimonial;
