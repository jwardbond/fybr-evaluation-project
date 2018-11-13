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
    itemArr[project].sites[site] = {id:, name:}
  */
  createItemArr() {
    const siteArr = this.props.sites;
    const projectsArr = this.props.projects;
    let itemArr;

    //for each 'project' in the 'projectsArr' array
    //return updated project
    console.log(projectsArr); 
    itemArr = projectsArr.map(project => {
      //for each 'site' in 'project.sites' array
      //return updated sites
      let updatedSites;
      updatedSites = project.sites.map(site => {
        //find the site with the id === projects[project].sites[site]
        let correspondingSite = siteArr.find(siteInSiteArr => {
          return siteInSiteArr.id === site;
        });
        //return a new, hybrid, site object
        return {
          id: correspondingSite.id,
          name: correspondingSite.name
        };
      });
      project.sites = updatedSites;
      return project;
    });
    return itemArr;
  }

  render() {
    const projects = this.props.projects;
    const sites = this.props.sites;
    const centerMapOnSite = this.props.centerMapOnSite.bind(this);
    const createItemArr = this.createItemArr; //don't need to bind

    //to connect project and site data
    const itemsArr = this.createItemArr();

    //Filled with dummy data
    const items = [
      {
        id: 1,
        name: "Cypress Provincial Park",
        items: [
          {
            id: 1,
            name: "East"
          },
          {
            id: 2,
            name: "West"
          }
        ]
      },
      {
        id: 2,
        name: "Gambier Island",
        items: [
          {
            id: 3,
            name: "Lake"
          }
        ]
      },
      {
        id: 3,
        name: "Anvil Island",
        items: [
          {
            id: 4,
            name: "First Anvil"
          },
          {
            id: 5,
            name: "Second Anvil"
          },
          {
            id: 6,
            name: "Tip"
          }
        ]
      }
    ];

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
      Data should be an array of items. Each item also has items that represent 
      the sub menu. Use the data from the redux store being passed in as props.

      The structure of the data is:

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
