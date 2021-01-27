// tools
import { Route, Switch, Redirect } from "react-router-dom";

//components
import MyAmazingShop from "../components/projectOverview/MyAmazingShop";
import Readeo from "../components/projectOverview/Readeo";
import SoccerTime from "../components/projectOverview/SoccerTime";
import Tetris from "../components/projectOverview/Tetris";

// layout
import Home from "../layout/home/Home";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route
					path={"/projects/myAmazingShop"}
					component={MyAmazingShop}
				/>
				<Route
					path={"/projects/soccerTime"}
					component={SoccerTime}
				/>
				<Route
					path={"/projects/readeo"}
					component={Readeo}
				/>
				<Route
					path={"/projects/tetrisJS"}
					component={Tetris}
				/>
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
};

export default App;
