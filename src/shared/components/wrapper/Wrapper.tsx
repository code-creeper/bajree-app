import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import React from 'react';
import {StatusBar, StyleSheet, View,Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {WHITE} = COLORS;

interface Props {
  children: any;
  noPaddingTop: any;
  noPaddingBottom: any;
  bgColor?: string;
  barStyle: 'dark-content' | 'default' | 'light-content';
}
const Wrapper = ({
  barStyle = 'light-content',
  children,
  noPaddingTop,
  noPaddingBottom,
  bgColor = WHITE,
}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : Platform.OS ==='android' ? RF(12) : insets.bottom;

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={COLORS.SECONDARY_BLUE}
      />
      <View
        style={[
          styles.container,
          {
            paddingBottom,
            paddingTop,
            backgroundColor: bgColor,
          },
        ]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
