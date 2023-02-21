import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TextInput } from 'react-native-paper';

import { COLORS } from '@theme/colors';
import FastImage from 'react-native-fast-image';

import { appLogo } from '@assets/icons';
import CustomButton from '@components/customButton/CustomButton';
import CustomText from '@components/customText';

import Wrapper from '@components/wrapper/Wrapper'

const{
    SECONDARY_BLUE,
    GRAY,
    BLACK,
    BLUE
}=COLORS
const ForgotPassword = () => {
  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.main}>
            <FastImage 
                source={appLogo}
                style={{height:150,width:150,}}
                resizeMode={FastImage.resizeMode.contain}
            />
            <CustomText color={SECONDARY_BLUE} style={styles.heading}>
                Forgotten your password?
            </CustomText>
            <CustomText color={GRAY} >
                We can send you a link to reset your password.
            </CustomText>
            <TextInput
          label="Email"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          style={styles.input}
        />
        <CustomButton 
            tittle={'Reset Password'}
        />
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default ForgotPassword