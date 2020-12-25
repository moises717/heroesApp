import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);

	const [values, handleInputChange, reset] = useForm({ search: q });
	const { search } = values;

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${search}`);
	};

	return (
		<div>
			<h1>Search screen</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="find your hero"
							className="form-control"
							name="search"
							value={search}
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="btn m-1 btn-block btn-outline-primary">
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Result</h4>
					<hr />

					{q === "" && (
						<div className="alert alert-info">There are not results</div>
					)}

					{q !== "" && heroesFiltered.length === 0 && (
						<div className="alert alert-danger">
							There are not results with {q}
						</div>
					)}

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
