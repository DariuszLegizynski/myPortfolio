// tools
import { Route, Switch, Redirect } from "react-router-dom";

//component
import ProjectOverview from "../components/projectOverview/ProjectOverview";

// layout
import Home from "../layout/home/Home";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route
					path={"/projects/:project"}
					component={ProjectOverview}
				/>
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
};

export default App;
