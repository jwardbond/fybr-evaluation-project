# fybr-evaluation-project

This project is in development according to the challenge outlined [here](https://github.com/spireaero/fybr-evaluation-project)


# To Install

#### Uses NodeJS v10.13.0

1. `git clone` the repo
2. run `npm install` in your cloned repo to get dependencies
3. create a `.env` file with your mapbox.gl key following the format in `.env.example`
4. start the api listening on port:3001 with `npm run dev:api`
5. start the client listening on port:3000 with `npm run dev:client`
6. navigate to http://localhost:3000 in your browser

>the webpack-dev-server will proxy requests starting with `/api` to port 3001


# Changed In 1.1.0

### Accordion menus

- The `List` class has been expanded to render a list of items and their sub-items using the following chain of components/stateless functional components

    `Sidebar` \> `List` \> `ListItem` \> `SubList` \> `SubListItem`

- `ListItem` contains `onClick` logic to toggle the expanded state (toggle whether or not `SubList` is rendered)
- `SubListItem` has an `onClick` event that propagates up the chain to the `Sidebar` container, where it interacts with the redux store to call `centerMapOnSite`, which repositions the mapbox.gl map

# To Be Changed

### Accordion menus

- Right now, the accordion logic is handled by changing the state of `ListItem`. This state is not being managed within the redux store. The `onClick` logic should dispatch an action to the reducers.
- The `List` and `SubList` stateless functional components are almost identical: all they do is construct a list from an array of items. There is probably a way to just re-use the `List` function.
