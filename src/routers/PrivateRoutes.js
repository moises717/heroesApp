import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoutes = ({
	isAutenticated,
	component: Componenet,
	...rest
}) => {
	localStorage.setItem("lastPath", rest.location.pathname);

	return (
		<Route
			{...rest}
			component={(props) =>
				isAutenticated ? <Componenet {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

PrivateRoutes.propTypes = {
	isAutenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
