import React, { Component } from "react";

import styles from "./SubListItem.scss";

/*
Displays a single item
*/
class SubItem extends Component {
 
  /*
  Logic to handle click events
  In this case: Propogates up the chain to the container component by 
  calling the onClickSubItem method of the PROP
  */
  handleClick(id) {
    this.props.onClickSubItem(id);
  }

  /*
  Renders the (sub level) item
  */ 
  render() {
    let { item } = this.props;
    let handleClick = this.handleClick.bind(this, item.id);

    return (
      <div className={styles.subContainer} onClick={handleClick}>
        {item.name}
      </div>
    );
  }
}
export default SubItem;
