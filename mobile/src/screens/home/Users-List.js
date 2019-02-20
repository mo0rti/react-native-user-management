import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View } from "react-native";
import { PvhText, PvhUserAvatar, PvhListFooterLoading } from "@Components";
import { Male, Female } from "@Assets/icons";

const UserItem = ({ item, onPressItem }) =>
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={() => onPressItem(item)}>
            <PvhUserAvatar large style={styles.avatar} uri={item.avatar} />
            <View style={styles.captions}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <PvhText small style={styles.title}>
                        {item.name}
                    </PvhText>
                    <View style={styles.gender}>
                        {item.gender == "male" ? <Male /> : <Female />}
                    </View>
                </View>
                <PvhText small style={styles.subtitle}>
                    {item.username}
                </PvhText>
            </View>
        </TouchableOpacity>
    </View>

const UsersList = ({ listProps }) =>
    <FlatList
        data={listProps.items}
        renderItem={({ item, index }) => <UserItem item={item} onPressItem={listProps.onItemSelected} />}
        keyExtractor={item => item.id}
        refreshing={listProps.refreshing}
        onRefresh={listProps.handleRefresh}
        ListFooterComponent={listProps.renderFooter(PvhListFooterLoading)}
        onEndReached={listProps.handleLoadMore}
        // 0.5 >> means that when the last item in the data is within one half of a screen-full of items from being visible, the app should fetch more items.
        onEndReachedThreshold={0.5}
    />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 12
    },
    avatar: {
        flex: 1,
        borderWidth: 2,
        aspectRatio: 1,
        borderRadius: 50
    },
    touchable: {
        flex: 1,
        flexDirection: 'row'
    },
    captions: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#313131',
        paddingBottom: 2,
        paddingLeft: 8
    },
    gender: {
        paddingBottom: 2,
        paddingRight: 8
    },
    subtitle: {
        color: '#B5B5B5',
        paddingTop: 2,
        paddingLeft: 8
    },
});

export default UsersList;
