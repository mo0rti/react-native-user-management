import React from 'react';
import { FlatList, View, TouchableOpacity } from "react-native";
import { Icon } from 'expo';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PvhText, PvhTextInput, PvhButton } from "@Components";
import styles from "./style";

const AddressHeader = ({ address, deleteAddress }) =>
    <View style={styles.headerContainer}>
        <PvhText style={styles.addressHeader}>NO.{address.number} {address.street} {address.city}</PvhText>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteAddress(address)}>
            <Icon.AntDesign
                name="delete"
                size={wp('4%')}                
                color="#cc6161"
            />
        </TouchableOpacity>
    </View >

const ListFooter = ({ addNewAddress }) =>
    <View style={styles.listfooter}>
        <PvhButton caption="Add new address" onPress={addNewAddress} />
    </View>

const AddressItem = ({ item, onChangeText, index, deleteAddress }) =>
    <View style={styles.form}>
        <AddressHeader address={item} deleteAddress={deleteAddress} />
        <PvhTextInput value={item.city} label="City" onChangeText={input => onChangeText('city', input, index)} style={styles.inputDivider} />
        <PvhTextInput value={item.street} label="Address" onChangeText={input => onChangeText('street', input, index)} placeholder="Street" style={styles.inputDivider} />
        <View style={styles.inlineContainer}>
            <PvhTextInput value={`${item.number}`} label="Unit number" onChangeText={input => onChangeText('number', input, index)} style={styles.inlineInput} />
            <View style={styles.betweenInlineInputs}></View>
            <PvhTextInput value={item.zipcode} label="Zip Code" onChangeText={input => onChangeText('zipcode', input, index)} style={styles.inlineInput} />
        </View>
    </View>

const AddressesList = ({ data, addNewAddress, onChangeText, deleteAddress }) =>
    <FlatList
        data={data}
        renderItem={({ item, index }) => <AddressItem item={item} key={index} index={index} onChangeText={onChangeText} deleteAddress={deleteAddress} />}
        keyExtractor={(item, index) => item + index}
        ListFooterComponent={() => <ListFooter addNewAddress={addNewAddress} />}
        // 0.5 >> means that when the last item in the data is within one half of a screen-full of items from being visible, the app should fetch more items.
        onEndReachedThreshold={0.5}
    />

export default AddressesList;
