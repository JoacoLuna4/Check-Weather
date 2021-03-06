import React from "react";
import { Spinner } from "react-bootstrap";

const Type = (props) => {
	const city = props.dataso;
	const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es`;

	const [est, setEst] = React.useState([]);
	let [isLoading, setLoading] = React.useState(true);
	console.log(isLoading);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			apiGet();
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		setLoading(false);
	};

	return (
		<React.Fragment>
			<div className="containerType footerdate">
				{isLoading ? (
					<Spinner animation="border" className="center" />
				) : (
					<span className="containerDateInfo center">
						<h2 className="center type-value">{est.weather[0].description}</h2>
					</span>
				)}
			</div>
		</React.Fragment>
	);
};

export default Type;
