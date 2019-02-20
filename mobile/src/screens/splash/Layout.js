import React from 'react';
import { Image } from 'react-native';
import { DangerZone } from 'expo';
import splash from '@Assets/images/splash.jpg';
import { PvhContainer } from "@Components";
import styles from "./style";

const { Lottie } = DangerZone;

const Layout = ({ animation, setAnimationRef }) => (
    <PvhContainer style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={splash} />
        {animation &&
            <Lottie
                ref={setAnimationRef}
                style={styles.animation}
                source={animation}
            />}
    </PvhContainer>
)

export default Layout;
