import React, {Fragment} from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Strings, Theme} from '../../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const KButton = ({title, iconVisible = true, txtStyle, containerStyle}) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(Theme.rippleColor)}>
      <View style={styles.outerContainer}>
        <View style={[styles.container, containerStyle]}>
          <Text style={txtStyle}>{title}</Text>
          {iconVisible ? (
            <Icon
              name="chevron-right"
              type="evilicon"
              color={Theme.txtDarkxl}
              size={hp(3.5)}
            />
          ) : null}
        </View>
        {iconVisible ? (
          <View
            style={{
              height: 0.8,
              marginHorizontal: wp(3),
              backgroundColor: Theme.txtDarkx,
            }}
          />
        ) : null}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // elevation: 1,
    backgroundColor: Theme.bgColor,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp(1.8),
  },
});

export default KButton;
