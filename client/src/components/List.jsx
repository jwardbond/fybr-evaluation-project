import React, { Component } from "react";

import ListItem from "./ListItem";
import styles from "./List.scss";

/*
Loads a list
*/
export default function List(props) {
  let items = props.items.map(itemsElement => {
    return <ListItem key={itemsElement.id} item={itemsElement} />;
  });

  return <div>{items}</div>;
}
