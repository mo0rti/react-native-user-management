import React from 'react';
import PvhNavbarTitle from "./Pvh-Navbar-Title";
import PvhHeaderBackButton from "./Pvh-Header-Back-Button";
import PvhHeaderEmptySpace from "./Pvh-Header-Empty-Space";

const PvhHeader = ({ navigation, title, right, left }) => ({
    headerRight: (right) ? right : <PvhHeaderEmptySpace />,
    headerTitle: <PvhNavbarTitle caption={title} />,
    headerLeft: (left) ? left : <PvhHeaderBackButton onPress={() => navigation.pop()} />
});

export default PvhHeader;
