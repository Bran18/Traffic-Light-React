import React from "react";

//create your first component
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		const redSelected = this.state.marketLight == "red" ? "selected" : "";
		const yellowSelected =
			this.state.marketLight == "yellow" ? "selected" : "";
		const greenSelected =
			this.state.marketLight == "green" ? "selected" : "";

		return (
			<div className="light text-center mt-5">
				<div id="topSignal"></div>
				<div id="container">
					<div
						className={"red light m-1 " + redSelected}
						onClick={() =>
							this.setState({ marketLight: "red" })
						}></div>
					<div
						className={"yellow light m-1 " + yellowSelected}
						onClick={() =>
							this.setState({ marketLight: "yellow" })
						}></div>
					<div
						className={"green light m-1 " + greenSelected}
						onClick={() =>
							this.setState({ marketLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
