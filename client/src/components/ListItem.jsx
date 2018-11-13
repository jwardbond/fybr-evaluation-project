import React, { Component } from "react";

import SubList from "./SubList";
import styles from "./ListItem.scss";

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
    this.setState(this.state);
  }

  /*
  Logic for handling what happens when a sub-item is clicked
  In this case it passes it up the chain to the container (Sidebar)
  by calling the onClickSubItem function of the PROP
  */
  onClickSubItem(id) {
    this.props.onClickSubItem(id);
  }

  /*
  Renders the (top level) item
  If the state is expanded: renders the sub-list level items as well
  */
  render() {
    let { item } = this.props;
    let { expanded } = this.state;
    let onClickSubItem = this.onClickSubItem.bind(this);
    let updateView = this.updateView.bind(this);

    return (
      <div>
        <div className={styles.container} onClick={updateView}>
          {item.name}
          <div className={styles.arrow}>{expanded ? "▲" : "▼"}</div>
        </div>
        {expanded ? (
          <SubList onClickSubItem={onClickSubItem} subItems={item.items} />
        ) : null}
      </div>
    );
  }
}

export default ListItem;
