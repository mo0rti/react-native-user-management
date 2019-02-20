import React from 'react';
import { View } from 'react-native';
import styles from "./style";
import { PvhLoading, PvhTextInput, PvhPassword, PvhButton, PvhText, PvhContainer, PvhContent } from "@Components";

const Layout = ({ isRequesting, setUsernameRef, setPasswordRef, signin, signup, onChangeText }) =>
    <PvhContainer>
        <PvhContent>
            <View style={styles.pageTitleSection}>
                <PvhText large style={styles.pageTitleText}>Login</PvhText>
            </View>
            <View style={styles.form}>
                <PvhTextInput label="Username" ref={setUsernameRef} onChangeText={input => onChangeText('username', input)} style={styles.inputDivider} />
                <PvhPassword label="Password" ref={setPasswordRef} onChangeText={input => onChangeText('password', input)} style={styles.inputDivider} />
                <PvhButton caption="Login" onPress={signin} style={styles.loginButton} />
            </View>
            <View style={styles.spacer}>
                <View style={styles.line}>
                </View>
                <View style={styles.spacerLabelContainer}>
                    <PvhText style={styles.spacerLabel}>Or</PvhText>
                </View>
            </View>
            <View style={styles.register}>
                <PvhText style={styles.labelDontHaveAccount}>Don't have an account</PvhText>
                <PvhButton bordered dark caption="Sign up" onPress={signup} style={styles.registerButton} labelStyle={styles.signupcaption} />
            </View>
            <View style={styles.footer}>
            </View>
        </PvhContent>
        {isRequesting && <PvhLoading />}
    </PvhContainer>

export default Layout;
