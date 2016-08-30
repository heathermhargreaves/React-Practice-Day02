import React from "react";
import Child from "./child.js"

export default React.createClass({
	getInitialState() {
		return {
			visible: false
		}
	},
	componentWillMount() {
		console.log("will mount parent");
	},
	componentDidMount() {
		console.log("did mount parent");
	},

	render() {
		return (
			<div ref={ref => this.test = ref}>
					<input onChange={(e) => this.setState({name: e.target.value})}/>
          <button onClick={this.onOff}>Show/Hide Child</button>
          {this.state.visible ? <Child name={this.state.name}/> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
})
