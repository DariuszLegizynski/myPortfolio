import React from "react";

const Testimonial = ({ description, title }) => {
	return (
		<div className="testimonials__text">
			<p>{description}</p>
			<h4>{title}</h4>
		</div>
	);
};

export default Testimonial;
