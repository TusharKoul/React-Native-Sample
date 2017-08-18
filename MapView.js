import PropTypes from 'prop-types';
import React from 'react';

import { requireNativeComponent } from 'react-native';

class MapView extends React.Component {
    render() {
        return <RNTMap {...this.props}/>;
    }
}

MapView.propTypes = {
    /**
     * When this property is set to `true` and a valid camera is associated
     * with the map, the camera’s pitch angle is used to tilt the plane
     * of the map. When this property is set to `false`, the camera’s pitch
     * angle is ignored and the map is always displayed as if the user
     * is looking straight down onto it.
     */
    pitchEnabled: PropTypes.bool,
};


// 1. requireNativeComponent automatically resolves this to "RNTMapManager"
// 2. passing second argument as MapView instead of null allows the infrastructure
//    to verify that the propTypes match the native props to reduce the chances of
//    mismatches between the ObjC and JS code
let RNTMap = requireNativeComponent('RNTMap', MapView);
module.exports = MapView;
