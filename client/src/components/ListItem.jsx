import React, { Component } from "react";

import SubItemList from "./SubList";

/*
Accordion logic happens here
Choose to display or not display subitems
*/
class ListItem extends Component {
  //to be managed by redux later
  state = {
    expanded: false
  };

  //proc the state change
  updateView(e) {
    this.state.expanded
      ? (this.state.expanded = false)
      : (this.state.expanded = true);

    console.log(this.state);
    this.setState(this.state);
  }

  //Render the item, and if the state is expanded, then render the subitmes as well
  render() {
    //grab from props
    let { item } = this.props;
    let { expanded } = this.state;

    return (
      <div>
        <div onClick={this.updateView.bind(this)}>{item.name}</div>
        {/* {expanded ? <SubItemList subItems={item.items} /> : null} */}
        {expanded? console.log('expanded') : console.log('not expanded')}
      </div>
    );
  }
}

export default ListItem;
