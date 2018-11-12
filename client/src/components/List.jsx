import React, { Component } from "react";

import Item from "./Item";
import styles from "./List.scss";

//Simply makes a new item component for each item
export default function List(props) {
  let itemList = props.items.map(itemElement => {
    return <Item key={itemElement.id} item={itemElement}/>;
  });

  return <div>{itemList}</div>;
}
