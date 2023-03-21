// tools
import ModalComponent from "../modal/ModalComponent";

// styles
import "./ProjectItem.css";

const ProjectItem = ({
	thumbnail,
	large,
	altName,
	title,
	description,
	descriptionLong,
	linkLive,
	linkGithub,
	hideReact,
	hideRouter,
	hideRedux,
	hideVue,
	hideVueRouter,
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
					<ModalComponent
						large={large}
						title={title}
						description={description}
						descriptionLong={descriptionLong}
						linkLive={linkLive}
						linkGithub={linkGithub}
						hideVue={hideVue}
						hideVueRouter={hideVueRouter}
						hideReact={hideReact}
						hideRouter={hideRouter}
						hideRedux={hideRedux}
						hideSass={hideSass}
						hideFirebase={hideFirebase}
						hideFirestore={hideFirestore}
						hideJS={hideJS}
						hideBootstrap={hideBootstrap}
					/>

					<div className="project-item__container__text__tags">
						<ul>
							{!hideVue && <li>VUE3JS</li>}
							{!hideVueRouter && <li>VUE-ROUTER</li>}
							{!hideReact && <li>REACTJS</li>}
							{!hideRouter && (
								<li>REACT-ROUTER</li>
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
