import * as turf from '@turf/turf';
import { sitesSetCurrent } from './sites';

export const MAP_SET_CENTER = 'MAP_SET_CENTER';
export const MAP_SET_ZOOM = 'MAP_SET_ZOOM';

export function mapSetCenter(center) {
  return {
    type: MAP_SET_CENTER,
    center
  };
}

export function mapSetZoom(zoom) {
  return {
    type: MAP_SET_ZOOM,
    zoom
  };
}

export function centerMapOnSite(id) {
  return (dispatch, getState) => {
    const { top, right, bottom, left } = getState().sites.byId[id].bounding;
    const features = turf.featureCollection([
      turf.point([Number(left), Number(top)]),
      turf.point([Number(right), Number(top)]),
      turf.point([Number(right), Number(bottom)])
    ]);

    dispatch(sitesSetCurrent(id));
    dispatch(mapSetCenter(turf.center(features).geometry.coordinates));
    dispatch(mapSetZoom(initial.zoom));
  };
}

const initial = {
  center: [-123.1939435, 49.2578263],
  zoom: 15
};

const reducer = {
  [MAP_SET_CENTER](state, action) {
    return {
      ...state,
      center: action.center
    };
  },
  [MAP_SET_ZOOM](state, action) {
    return {
      ...state,
      zoom: action.zoom
    };
  }
};

/*
Exports a function that takes two arguments:
  - The state (optional, default to 'initial') defined above
  - An action to change the state
The function checks whether or not the action has a type contained in the reducers defined above
  TRUE: returns the result of applying the appropriate reducer function (the new state)
  FALSE: returns the same state as before
*/
export default (state = initial, action) => reducer.hasOwnProperty(action.type) ? reducer[action.type](state, action) : state;
