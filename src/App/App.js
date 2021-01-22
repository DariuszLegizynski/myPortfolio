// tools
import { Route, Switch, Redirect } from "react-router-dom";

// layout
import Home from "../layout/home/Home";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
};

export default App;
