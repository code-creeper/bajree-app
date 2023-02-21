import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image'

import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { ROUTES } from '@utils/routes';
import { RF } from '@theme/responsive';

import Wrapper from '@components/wrapper/Wrapper';

import { appLogo, google } from '@assets/icons';
import CustomText from '@components/customText';

const{
    signUp,
    login
}=ROUTES
const {
    BLUE,
    WHITE,
    LIGHT_GRAY,
    GRAY,
    LIGHT_BLUE,
    LIGHT_PRIMARY,
    PRIMARY,
    SEA_BLUE,
    SECONDARY_BLUE
} = COLORS
const {
    OPENSANS_BOLD,
    FORUM_REGUAR,
    POPPINS_EXTRA_BOLD,
    OPENSANS_MEDIUM
} = FONTS
export default function Splash({navigation}:any) {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <FastImage
                        source={appLogo}
                        style={{ height: 200, width: 200, marginTop: RF(40) }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                </View>
                <View>
                    <Text style={styles.welcom} allowFontScaling={false}>
                        WELCOME TO BAJREE
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <FastImage
                            source={google}
                            style={{ height: 30, width: 30, position: 'absolute', left: RF(20) }}
                        />
                        <Text style={styles.textStyle} allowFontScaling={false}>SIGN IN WITH GOOGLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate(signUp)}
                        style={styles.buttonOutline}
                    
                    >

                        <Text style={[styles.textStyle, { color: SECONDARY_BLUE }]} allowFontScaling={false}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>

                    <Text style={styles.signIn} allowFontScaling={false}>Already have an account ?
                        <TouchableOpacity onPress={()=>navigation.navigate(login)}>
                            <Text style={[styles.signIn, { color: SECONDARY_BLUE,textDecorationLine:'underline', }]}>SignIN</Text>
                        </TouchableOpacity>
                    </Text>

                </View>

            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        flex: 1,
        justifyContent: 'space-between',
        padding: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcom: {
        color: SECONDARY_BLUE,
        fontFamily: OPENSANS_MEDIUM,

        fontSize: RF(25),
        marginTop: RF(10),
        marginBottom: RF(20),
    },
    button: {
        backgroundColor: SECONDARY_BLUE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        borderRadius: RF(10),
        padding: RF(10),
        marginBottom: RF(20),
    },
    buttonOutline: {
        borderWidth: RF(2),
        borderColor: SECONDARY_BLUE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        borderRadius: RF(10),
        padding: RF(10),
        marginBottom: RF(20),
    },
    textStyle: {
        color: WHITE,
        fontSize: RF(14),
        fontFamily: OPENSANS_MEDIUM,
    },
    signIn: {
        color: GRAY,
        fontSize: RF(13),
        alignSelf: 'center',
        fontFamily: OPENSANS_MEDIUM
        // marginBottom:RF(20),
    }
})