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
		responsive: [
			{
				breakpoint: 16000,
				settings: "unslick",
			},
			{
				breakpoint: 768,
				settings: "slick",
			},
		],
	};
	return (
		<section className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<Slider {...settings}>
				<Testimonial
					description={
						"He works very thoroughly and quickly. He thinks well when preparing work and does the work with great efficiency and systematics. With his extraordinary enthusiasm he convinces to a high degree. He always does his job with great energy."
					}
					title={"Bury GmbH"}
					link={"Bury_Zeugnis_DariuszLegizynski.pdf"}
				/>
				<Testimonial
					description={
						"Mr. Legizynski has in-depth specialist knowledge, which he was able to implement constructively in practice. He always identified with his tasks and the company. We therefore got to know him as a motivated employee who always coped well with his tasks even under difficult working conditions. He had a high level of initiative and was thus able to solve new and difficult tasks."
					}
					title={"Elpro GmbH"}
					link={"Elpro_Zeugnis_DariuszLegizynski.pdf"}
				/>
				<Testimonial
					description={
						"He takes on his tasks and the company's interests at all times to our complete satisfaction. Mr. Legizynski always convinces with his always cooperative, confident and courteous demeanor. Due to his friendly and friendly nature, the cooperation with his superiors, colleagues and employees always goes well."
					}
					title={"Bury GmbH"}
					link={"Bury_Zeugnis_DariuszLegizynski.pdf"}
				/>
			</Slider>
		</section>
	);
};

export default Testimonials;
