import React from 'react';
import { ScrollView } from "react-native";
import { PvhContainer, PvhContent } from "@Components";
import AddressList from './Address-List';

const Layout = ({ addNewAddress, data, onChangeText, deleteAddress }) =>
    <PvhContainer noStatusbarPadding>
        <PvhContent>
            <ScrollView>
                <AddressList addNewAddress={addNewAddress} data={data} onChangeText={onChangeText} deleteAddress={deleteAddress} />
            </ScrollView>
        </PvhContent>
    </PvhContainer>

export default Layout;
