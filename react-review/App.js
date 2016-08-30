import React from 'react';
import Child from './Child.js';
import Map from './Map.js';

export default React.createClass({
  getInitialState() {
    return {
      name: "Heather",
      users: [{name: "Jason"}, {name: "Mike"}, {name: "Cindy"}],
    }
  },
  render() {
    return(
      <div className="asdf" style={{width: "500px", borderBottom: "1px solid black"}}>
        <h1 ref={(ref) => this.h1 = ref}>{this.state.name}</h1>
        <Child ting={"tinga"} setDisplay={this.displayChange} />
        <Map users={this.state.users}/>
      </div>
    )
  },
  displayChange(value) {
    this.h1
    this.setState({
      name: value
    })
  },


});
