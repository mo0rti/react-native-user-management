import React from 'react';
import { View } from "react-native";
import { PvhContainer, PvhContent, PvhButton, PvhText } from "@Components";
import styles from "./style";

const Layout = ({ user, signOutAccount }) =>
    <PvhContainer>
        <PvhContent>
            <View style={styles.registerSection}>
                <PvhText style={styles.warningTextTitle}>Signing out?!</PvhText>
                <PvhText style={styles.warningTextSubtitle}>Do you really want to sign out the {user.username} account?!</PvhText>
                <PvhButton style={styles.deleteButton} caption="Sign out account" onPress={signOutAccount} />
            </View>
        </PvhContent>
    </PvhContainer>

export default Layout;
