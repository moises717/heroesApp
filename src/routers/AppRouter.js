import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoutes } from "../routers/PrivateRoutes";
import { PublicRoutes } from "../routers/PublicRoutes";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {
	const {
		user: { logged },
	} = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoutes
						isAutenticated={logged}
						exact
						path="/login"
						component={LoginScreen}
					/>
					<PrivateRoutes
						isAutenticated={logged}
						path="/"
						component={DashBoardRoutes}
					/>
				</Switch>
			</div>
		</Router>
	);
};
