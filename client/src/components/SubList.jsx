import React, { Component } from "react";

import SubListItem from "./SubListItem";

/*
Loads a sublist
*/
export default function SubList(props) {
  console.log(props);
  let subItems = props.subItems.map(element => {
    return <SubListItem key={element.id} item={element} />;
  });

  return <div>{subItems}</div>;
}
