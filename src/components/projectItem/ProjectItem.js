// styles
import { Link } from "react-router-dom";
import "./ProjectItem.css";

const ProjectItem = ({
	thumbnail,
	altName,
	title,
	description,
	hideReact,
	hideRouter,
	hideRedux,
	hideSass,
	hideFirebase,
	hideFirestore,
	hideJS,
	hideBootstrap,
}) => {
	return (
		<section className="project-item">
			<div className="project-item__container">
				<img
					src={thumbnail}
					alt={`${altName}_project_thumbnail`}
				/>

				<div className="project-item__container__text">
					<Link
						to={`/projects/${altName}`}
						className="project-item__container__text__link link link--page"
					>
						<h3>{title}</h3>
						<span>{description}</span>
					</Link>
					<div className="project-item__container__text__tags">
						<ul>
							{!hideReact && <li>REACTJS</li>}
							{!hideRouter && (
								<li>REACT ROUTER</li>
							)}
							{!hideRedux && <li>REDUX</li>}
							{!hideSass && <li>SASS</li>}
							{!hideFirebase && <li>FIREBASE</li>}
							{!hideFirestore && (
								<li>FIRESTORE</li>
							)}
							{!hideJS && <li>JAVASCRIPT</li>}
							{!hideBootstrap && (
								<li>BOOTSTRAP 4</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectItem;
