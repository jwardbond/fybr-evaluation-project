import React, { Component } from "react";

import styles from "./SubListItem.scss";

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
    return (
      <div className={styles.subContainer} onClick={this.mapChange.bind(this)}>
        {item.name}
      </div>
    );
  }
}
export default SubItem;
