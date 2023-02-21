import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const{
    WHITE,
    BLACK,
    SECONDARY_BLUE
}=COLORS

const{
    OPENSANS_MEDIUM
}=FONTS

export default function CustomButton(props:any) {
  return (
    <View>
    <TouchableOpacity
        style={[customButton.container,{
            backgroundColor : props.backgroundColor ? props.backgroundColor :SECONDARY_BLUE ,
            marginTop: props.marginTop? props.marginTop : 20,
            marginLeft: props.marginLeft? props.marginLeft : 20,
        }]}
        onPress={props.onPress}
    >
        <Text style={[customButton.text,{
            color:props.color? props.color : WHITE
        }]} allowFontScaling={false}> {props.tittle} </Text>


    </TouchableOpacity>
</View>
  )
}
const customButton = StyleSheet.create({
    container: {
        height: 50,
        width: 320,
        marginTop: 20,
        marginBottom:5,
        borderRadius:15,
        // borderTopLeftRadius: 30,
        // borderBottomRightRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: white,
        elevation: 2,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        color: WHITE,
        alignSelf: 'center',
        // fontWeight : 'bold',
        fontFamily: OPENSANS_MEDIUM,
    }
});