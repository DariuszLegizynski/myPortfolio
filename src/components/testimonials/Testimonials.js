import React from "react";

// components
import Testimonial from "../testimonial/Testimonial";

// tools
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// styles
import "./Testimonials.css";

const Testimonials = () => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		initialSlide: 0,
		lazyLoad: true,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1250,
		autoplaySpeed: 5000,
		fade: true,
		cssEase: "linear",
	};
	return (
		<section className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<Slider {...settings}>
				<Testimonial
					description={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
					title={"Lorem Ipsum 1"}
				/>
				<Testimonial
					description={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
					title={"Lorem Ipsum 2"}
				/>
				<Testimonial
					description={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
					title={"Lorem Ipsum 3"}
				/>
			</Slider>
		</section>
	);
};

export default Testimonials;
