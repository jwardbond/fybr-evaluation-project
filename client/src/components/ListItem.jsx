import React, { Component } from "react";

import SubList from "./SubList";

class ListItem extends Component {
  //to be managed by redux later
  state = {
    expanded: false
  };

  /*
  Toggles the expanded state
  Should propogate up to container to be managed by redux [NOT IMPLEMENTED]
  */
  updateView(e) {
    this.state.expanded
      ? (this.state.expanded = false)
      : (this.state.expanded = true);

    console.log(this.state);
    this.setState(this.state);
  }

  /*
  Renders the [top level] item
  If the state is expanded: renders the sub-list level items as well
  */ 
  render() {
    //grab from props
    let { item } = this.props;
    let {expanded} = this.state;

    return (
      <div>
        <div onClick={this.updateView.bind(this)}>{item.name}</div>
        {expanded ? <SubList subItems={item.items} /> : null}
      </div>
    );
  }
}

export default ListItem;
