import React from 'react';
import { View } from "react-native";
import { PvhContainer, PvhContent } from "@Components";
import UsersList from "./Users-List";

const Layout = ({ listProps }) =>
    <PvhContainer>
        <PvhContent noPadding>
            <UsersList listProps={listProps} />
        </PvhContent>
    </PvhContainer>

export default Layout;
