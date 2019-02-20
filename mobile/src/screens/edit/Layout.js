import React from 'react';
import { View, ScrollView } from 'react-native';
import { PvhTextInput, PvhEmail, PvhPassword, PvhGender, PvhContainer, PvhContent } from "@Components";
import styles from "./style";

const Content = ({
    user, onChangeText,
    setUsernameRef, setPasswordRef, setEmailRef, setNameRef, setPhoneRef,
    setCityRef, setStreetRef, setUnitNumberRef, setZipcodeRef
}) =>
    <PvhContainer>
        <PvhContent>
            <ScrollView>
                <View style={styles.form}>
                    <PvhTextInput isReadonly={true} value={user.username} label="User name" ref={setUsernameRef} onChangeText={input => onChangeText('username', input)} style={styles.inputDivider} />
                    <PvhTextInput value={user.name} label="Name" ref={setNameRef} onChangeText={input => onChangeText('name', input)} style={styles.inputDivider} />
                    <PvhGender
                        labelStyle={styles.radioLabels}
                        style={styles.radio}
                        selectedIndex={user.gender == "male" ? 0 : 1}
                        onSelect={(index, value) => onChangeText('gender', value)} />
                    <PvhEmail value={user.email} label="Email" ref={setEmailRef} onChangeText={input => onChangeText('email', input)} style={styles.inputDivider} />
                    <PvhTextInput value={user.phone} label="Phone" ref={setPhoneRef} placeholder="+31000000000" onChangeText={input => onChangeText('phone', input)} style={styles.inputDivider} />
                    <PvhPassword value={user.password} label="Password" ref={setPasswordRef} placeholder="(min 6 characters a-z and 1-9)" onChangeText={input => onChangeText('password', input)} style={styles.inputDivider} />
                </View>
            </ScrollView>
        </PvhContent>
    </PvhContainer>

export default Content;
