import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { TextInput } from 'react-native-paper';
import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { ROUTES } from '@utils/routes';

import { appLogo } from '@assets/icons';
import FastImage from 'react-native-fast-image';

import Wrapper from '@components/wrapper/Wrapper';
import CustomButton from '@components/customButton/CustomButton';
import CustomText from '@components/customText';

const{
  signUp,
  forgotPassword
}=ROUTES
const {
  WHITE,
  SECONDARY_BLUE,
  BLUE,
  GRAY
} = COLORS
export default function Login({navigation}:any) {
  const [text, setText] = useState("");
  return (
    <Wrapper>

        {/* <ScrollView> */}
      <View style={styles.container}>
        <FastImage 
          source={appLogo}
          style={{height:150,width:150,alignSelf:'center'}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <CustomText color={SECONDARY_BLUE} style={styles.title}>
          SiGN IN
        </CustomText>
        <CustomText color={GRAY} style={styles.welcom}>
          Welcome back SignIN to continue
        </CustomText>
        <View style={styles.form}>
        <TextInput
          label="Email"
          value={text}
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          // value={text}
          activeOutlineColor={BLUE}
          mode='outlined'
          outlineColor={SECONDARY_BLUE}
          // onChangeText={text => setText(text)}
        />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate(forgotPassword)} style={{alignSelf:'flex-end'}}>
          <CustomText color={SECONDARY_BLUE} style={styles.forgot} >
            Forgot Password?
          </CustomText>
        </TouchableOpacity>
        <CustomButton
          tittle={'SIGN IN'}
        />
        <CustomText color={GRAY} style={styles.accountCreata}>
          Dont't have an account?<TouchableOpacity onPress={()=>navigation.navigate(signUp)}>
            <CustomText color={SECONDARY_BLUE} style={[styles.accountCreata,{textDecorationLine:'underline',}]}> SignUp</CustomText>
          </TouchableOpacity>
        </CustomText>
      </View>
        {/* </ScrollView> */}

    </Wrapper>
  )
}