import React from 'react';
import { View, ScrollView } from 'react-native';
import { PvhLoading, PvhGender, PvhTextInput, PvhEmail, PvhPassword, PvhButton, PvhText, PvhContainer, PvhContent, PvhCheckBox } from "@Components";
import styles from "./style";

const Content = ({
    user, isRequesting, signup, onChangeText, goBack, onCheckBoxValueChange, isChecked,
    setUsernameRef, setPasswordRef, setEmailRef, setNameRef, setPhoneRef,
    setCityRef, setStreetRef, setUnitNumberRef, setZipcodeRef
}) =>
    <PvhContainer>
        <PvhContent>
            <ScrollView>
                <View style={styles.pageTitleSection}>
                    <PvhText large style={styles.pageTitleText}>Sign up</PvhText>
                </View>
                <View style={styles.form}>
                    <PvhTextInput label="Name" ref={setNameRef} onChangeText={input => onChangeText('name', input)} style={styles.inputDivider} />
                    <PvhGender
                        labelStyle={styles.radioLabels}
                        style={styles.radio}
                        selectedIndex={user.gender == "male" ? 0 : 1}
                        onSelect={(index, value) => onChangeText('gender', value)} />
                    <PvhEmail label="Email" ref={setEmailRef} onChangeText={input => onChangeText('email', input)} style={styles.inputDivider} />
                    <PvhTextInput label="Phone" ref={setPhoneRef} placeholder="+31000000000" onChangeText={input => onChangeText('phone', input)} style={styles.inputDivider} />
                    <PvhTextInput label="User name" ref={setUsernameRef} onChangeText={input => onChangeText('username', input)} style={styles.inputDivider} />
                    <PvhPassword label="Password" ref={setPasswordRef} placeholder="(min 6 characters a-z and 1-9)" onChangeText={input => onChangeText('password', input)} style={styles.inputDivider} />
                    <PvhTextInput label="City" ref={setCityRef} onChangeText={input => onChangeText('city', input)} style={styles.inputDivider} />
                    <PvhTextInput label="Address" ref={setStreetRef} placeholder="Street" onChangeText={input => onChangeText('street', input)} style={styles.inputDivider} />
                    <View style={styles.inlineContainer}>
                        <PvhTextInput label="Unit number" ref={setUnitNumberRef} onChangeText={input => onChangeText('number', input)} style={styles.inlineInput} />
                        <View style={styles.betweenInlineInputs}></View>
                        <PvhTextInput label="Zip Code" ref={setZipcodeRef} onChangeText={input => onChangeText('zipcode', input)} style={styles.inlineInput} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <PvhCheckBox style={styles.checkbox} xxsmall onValueChange={onCheckBoxValueChange}>I have read and agree with the Terms of use</PvhCheckBox>
                </View>
                <View style={styles.registerSection}>
                    <PvhButton style={(isChecked) ? styles.signupButton : styles.signupButtonDisabled} disabled={!isChecked} caption="Sign up" onPress={signup} />
                    <PvhButton style={styles.backButton} caption="Back" onPress={goBack} />
                </View>
            </ScrollView>
        </PvhContent>
        {isRequesting && <PvhLoading />}
    </PvhContainer>

export default Content;
