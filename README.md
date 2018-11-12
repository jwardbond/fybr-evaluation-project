# fybr-evaluation-project

This project is in development according to the challenge outlined [here](https://github.com/spireaero/fybr-evaluation-project)

## Changed in V1.1.0

#### Accordion menus

- The `List` class has been expanded to render a list of items and their sub-items using the following chain of components/stateless functional components
  > `Sidebar` \> `List` \> `ListItem` \> `SubList` \> `SubListItem`
- `ListItem` contains `onClick` logic to toggle the expanded state (toggle whether or not `SubList` is rendered)
- `SubListItem` has an `onClick` event that propagates up the chain to the `Sidebar` container, where it interacts with the redux store to call `centerMapOnSite`, which does what you would expect

## To be changed

####Accordion menus

- Right now, the accordion logic is handled by changing the state of `ListItem`. This state is not being managed within the redux store. The `onClick` logic should dispatch an action to the reducers.
- Formatting is non-existent.
- The list of items (locations/sites) is currently a dummy var hardcoded in. Ideally this prop comes from `Sidebar` retrieving(?) from the redux store.
- The `List` and `SubList` stateless functional components are almost identical: all they do is construct a list from an array of items. There is probably a way to just re-use the `List` function.
