import React, { Component } from 'react';

import styles from './List.scss';

export default function List(props) {
  let itemList; 
  itemList = props.items.map(location => {
    return (<h1 key={location.name}>{location.name}</h1>);
  });
  return (
    <div>
      {itemList}
    </div>
  );
}