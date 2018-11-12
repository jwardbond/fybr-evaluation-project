import React, { Component } from "react";
import SubItem from "./SubItem";
import List from "./List";

/*
Accordion logic happens here
Choose to display or not display subitems
*/
class Item extends Component {
  
  //to be managed by redux later
  state = {
    expanded: false
  };

  updateView(e) {
    this.state.expanded
      ? (this.state.expanded = false)
      : (this.state.expanded = true);

      console.log(this.state);
  }

  render() {
    let { item } = this.props;
    let { expanded } = this.state;
    let subItemList = item.items.map(subItemElement => {
      return <SubItem key={subItemElement.id} />;
    });

    return (
      <div>
        <div onClick={this.updateView.bind(this)}>{item.name}</div>
        {subItemList}
      </div>
    );
  }
}

export default Item;
