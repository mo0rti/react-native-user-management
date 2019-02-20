import React from 'react';
import { View } from "react-native";
import { PvhContainer, PvhContent, PvhButton, PvhText } from "@Components";
import styles from "./style";

const Layout = ({ user, deleteAccount }) =>
    <PvhContainer>
        <PvhContent>
            <View style={styles.registerSection}>
                <PvhText style={styles.warningTextTitle}>Dangerous zone!!</PvhText>
                <PvhText style={styles.warningTextSubtitle}>Do you really want to delete the "{user.name}" account?!</PvhText>
                <PvhButton style={styles.deleteButton} caption="Delete the account" onPress={deleteAccount} />
            </View>
        </PvhContent>
    </PvhContainer>

export default Layout;
