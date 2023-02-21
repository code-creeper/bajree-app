import { View, Text, ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react';
import { appLogo } from '@assets/icons';
import { TextInput } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import Wrapper from '@components/wrapper/Wrapper';
import { styles } from './styles';
import CustomText from '@components/customText';
import { COLORS } from '@theme/colors';
import { ROUTES } from '@utils/routes';
import CustomButton from '@components/customButton/CustomButton';

const{
  SECONDARY_BLUE,
  GRAY,
  BLACK,
  BLUE,
  
}=COLORS
const{
  login
}=ROUTES
export default function SignUp({navigation}:any) {
  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.container}> 
          <FastImage 
            source={appLogo}
            style={{height:100,width:100,alignSelf:'center'}}
            resizeMode={FastImage.resizeMode.contain}
          />
           <CustomText color={SECONDARY_BLUE} style={styles.title}>
          SiGN UP
        </CustomText>
          <CustomText color={GRAY} style={styles.heading}>
            Please Sign Up To Your Account To Continue With App
          </CustomText>
          <TextInput
          label="First Name"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label="Last Name"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label="Email"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label="Password"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          mode='outlined'
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          label="Confirm Password"
          activeOutlineColor={BLUE}
          outlineColor={SECONDARY_BLUE}
          secureTextEntry={true}
          mode='outlined'
          style={styles.input}
        />
        <CustomButton 
          tittle={'Sign Up'}
        />
        <CustomText color={GRAY} style={styles.accountCreata}>
          Already have an account?<TouchableOpacity onPress={()=>navigation.navigate(login)}>
            <CustomText color={SECONDARY_BLUE} style={[styles.accountCreata,{textDecorationLine:'underline',}]}> Login</CustomText>
          </TouchableOpacity>
        </CustomText>
        </View>
      </ScrollView>

    </Wrapper>
  )
}