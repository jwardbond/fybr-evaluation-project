import React, { Component } from "react";
import SubItem from "./SubItem";
import List from "./List"

//Accordion logic happens here
//Choose to display or not display subitems

class Item extends Component {
  
  //to be managed by redux later
  state = {
    expanded: false
  };

  changeViewOnClick(e){

  }

  render() {
    let {item} = this.props;
    console.log(item);
    let {expanded} = this.state;
    let subItemList = item.items.map(subItemElement => {
      return(<div key={subItemElement.id}>{subItemElement.name}</div>);
    });

    return (
      <div>
        <div onClick={this.changeViewOnClick}>{item.name}</div>
        {subItemList}
      </div>
    );
  }
}

export default Item;
