import React, { useState } from "react";

// tools
import Modal from "react-modal";

// styles
import "./ModalComponent.css";

Modal.setAppElement("#root");

const ModalComponent = ({
	large,
	title,
	description,
	descriptionLong,
	linkLive,
	linkGithub,
	hideReact,
	hideRouter,
	hideRedux,
	hideSass,
	hideFirebase,
	hideFirestore,
	hideJS,
	hideBootstrap,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="modal">
			<button
				className="btn"
				id="view-project-btn"
				onClick={() => setModalIsOpen(true)}
			>
				<h3>{title}</h3>
				<p>{description}</p>
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
			>
				<img src={large} alt="one" />
				<div className="modal__text">
					<h2>{title}</h2>
					<p>{descriptionLong}</p>
				</div>
				<div className="modal__links">
					<a
						className="link link--page"
						target="_blank"
						rel="noreferrer"
						href={`${linkLive}`}
					>
						<button
							className="btn btn--projects"
							tabIndex="-1"
						>
							Live
						</button>
					</a>
					<a
						className="link link--page"
						target="_blank"
						rel="noreferrer"
						href={`https://github.com/DariuszLegizynski/${linkGithub}`}
					>
						<button
							className="btn btn--projects"
							tabIndex="-1"
						>
							GitHub
						</button>
					</a>
				</div>
				<div className="modal__technology">
					<h2>Used Technologies:</h2>
					<ul>
						{!hideReact && <li>REACTJS</li>}
						{!hideRouter && <li>REACT-ROUTER</li>}
						{!hideRedux && <li>REDUX</li>}
						{!hideSass && <li>SASS</li>}
						{!hideFirebase && <li>FIREBASE</li>}
						{!hideFirestore && <li>FIRESTORE</li>}
						{!hideJS && <li> JAVASCRIPT</li>}
						{!hideBootstrap && <li>BOOTSTRAP 4</li>}
					</ul>
				</div>
				<div className="modal__btn">
					<button
						className="btn btn--close"
						onClick={() => setModalIsOpen(false)}
					>
						<h5>close</h5>
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default ModalComponent;
