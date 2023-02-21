import {COLORS} from '@theme/colors';
import {FONTS} from '@theme/fonts';
import {RF} from '@theme/responsive';
import React from 'react';
import {Text, TextProps} from 'react-native';

const {FORUM_REGUAR, OPENSANS_REGULAR} = FONTS;
const {BLACK} = COLORS;

interface Props extends TextProps {
  style: any;
  bold: boolean;
  semiBold: boolean;
  size: number;
  color: string;
  capital: boolean;
  children: any;
  noFont: any;
  numberOfLines: number;
  italic: boolean;
  onPress: () => void;
  center: boolean;
}

const CustomText = (props: Partial<Props>) => {
  const {
    bold,
    semiBold,
    size = 13,
    color = BLACK,
    style,
    noFont,
    numberOfLines = 0,
    capital = false,
    onPress,
    center,
    italic = false,
  } = props;
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[
        {
          fontFamily: noFont ? FORUM_REGUAR : OPENSANS_REGULAR,
          fontSize: RF(size),
          fontWeight: bold ? '700' : semiBold ? '500' : 'normal',
          color,
          textTransform: capital ? 'uppercase' : 'none',
          textAlign: center ? 'center' : 'auto',
          fontStyle: italic ? 'italic' : 'normal',
        },
        style,
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
