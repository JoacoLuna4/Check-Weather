import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Resume from "./Components/Resume";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Resume />
			</React.Fragment>
		);
	}
}
export default App;
