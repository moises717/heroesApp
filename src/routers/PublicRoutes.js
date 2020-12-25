import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoutes = ({
	isAutenticated,
	component: Componenet,
	...rest
}) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				!isAutenticated ? <Componenet {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

PublicRoutes.propTypes = {
	isAutenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
