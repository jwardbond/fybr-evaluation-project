import React, { Component } from "react";

/*
Displays a single item
*/
class SubItem extends Component {
  /*
  On click, centers the map to a new location
  Should propogate back up to container for state change
  */
  mapChange(e) {}

  render() {
    let { item } = this.props;

    return <div onClick={this.mapChange.bind(this)}>{item.name}</div>;
  }
}
export default SubItem;
