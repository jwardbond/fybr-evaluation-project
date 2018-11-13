import React, { Component } from "react";
import ListItem from "./ListItem";

/*
Loads a list
Passes the item and a props.func through
*/
export default function List(props) {
  let items = props.items.map(itemsElement => {
    console.log(props.onClickSubItem);
    return (
      <ListItem
        onClickSubItem={props.onClickSubItem}
        key={itemsElement.id}
        item={itemsElement}
      />
    );
  });

  return <div>{items}</div>;
}
