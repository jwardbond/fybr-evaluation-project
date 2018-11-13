import React, { Component } from "react";
import { connect } from "react-redux";

import { getProjects, getSites } from "../model";
import { centerMapOnSite } from "../model/map";

import List from "../components/List";

class Sidebar extends Component {
  /*
  - The projects prop has projects[project].sites[site] = id
  - The sites prop has sites[site]= {id:, name:, etc}
  - This function combines those two props to make an item array with
    itemArr[project].items[site] = {id:, name:}, which was the (fybr) specified
    format
  */
  createItemsArr(projectsArr, sitesArr) {
    let itemsArr = [];

    //for each project
    let i;
    for (i = 0; i < projectsArr.length; i++) {
      //construct top level items
      itemsArr.push({
        id: projectsArr[i].id,
        name: projectsArr[i].name,
        //map correct subitems from 'sites'
        items: projectsArr[i].sites.map(site => {
          return {
            id: sitesArr[site - 1].id,
            name: sitesArr[site - 1].name
          };
        })
      });
    }
    return itemsArr;
  }

  render() {
    const projects = this.props.projects;
    const sites = this.props.sites;
    const centerMapOnSite = this.props.centerMapOnSite.bind(this);
    const createItemArr = this.createItemArr; //don't need to bind

    //to connect project and site data into the predefined format
    const items = this.createItemsArr(projects, sites);

    return <List items={items} onClickSubItem={centerMapOnSite} />;
  }
}

function mapStateToProps(state) {
  return {
    projects: getProjects(state),
    sites: getSites(state)
  };
}

const mapDispatchToProps = {
  centerMapOnSite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

/*
      ***DATA FORMAT SPECIFICATION***
      Data ('items') should be an array of items. Each item also has items that represent 
      the sub menu. Use the data from the redux store being passed in as props.

      The structure of the data is:
s
      [
        {
          id: 1,
          name: "Cypress Provincial Park",
          items: [
            {
              id: 1
              name: 'East'
            },
            {
              id: 2,
              name: 'West'
            }
          ]
        }
      ]
    */
