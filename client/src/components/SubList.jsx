import React, { Component } from "react";

import SubListItem from "./SubListItem";
import styles from "./SubList.scss";

export default function List(props) {
  let items = props.items.map(itemsElement => {
    return <SubListItem key={itemsElement.id} item={itemsElement} />;
  });

  return <div>{items}</div>;
}
