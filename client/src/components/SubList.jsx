import React, { Component } from "react";

import SubListItem from "./SubListItem";

/*
Loads a sublist
Passes the (sub)item and a props.func through
*/
export default function SubList(props) {
  
  let subItems = props.subItems.map(element => {
    return <SubListItem onClickSubItem={props.onClickSubItem} key={element.id} item={element} />;
  });

  return <div>{subItems}</div>;
}
