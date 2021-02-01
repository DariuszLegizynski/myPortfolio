import React from "react";

// styles
import "./Testimonial.css";

const Testimonial = ({ description, title, link }) => {
	return (
		<div className="testimonial__text">
			<p>{description}</p>
			<h4>{title}</h4>
			<a
				className="link"
				target="_blank"
				rel="noreferrer"
				href={`/Testimonials/${link}`}
			>
				link
				<p>(in german)</p>
			</a>
		</div>
	);
};

export default Testimonial;
