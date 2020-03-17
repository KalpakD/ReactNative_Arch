import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {Theme, Styles, Dimens, Strings} from '../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const KToolbar = ({
  title,
  isProfileVisible = true,
  onPressAvatar,
  leftIconVisible = false,
  onPressLeftIcon,
}) => {
  return (
    <View style={styles.container}>
      {leftIconVisible ? (
        <TouchableOpacity
          onPress={onPressLeftIcon}
          style={styles.leftIconContainer}>
          <Icon
            name="arrow-back"
            type="material"
            color={Theme.txtDarkxxxl}
            containerStyle={{padding: 4}}
            // size={hp(3.5)}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.textStyle}>{title}</Text>
      {isProfileVisible ? (
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          onPress={onPressAvatar}
          containerStyle={styles.profileContainer}
        />
      ) : null}
    </View>
  );
};

export default KToolbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.accentColor,
    height: hp('7%'),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: hp(2),
  },
  profileContainer: {
    position: 'absolute',
    right: wp(4),
    top: hp(1.5),
    elevation: 3,
  },
  leftIconContainer: {
    position: 'absolute',
    left: wp(4),
    top: hp(1.6),
    elevation: 3,
  },
  textStyle: {
    color: Theme.txtDarkxxl,
    // alignSelf: 'center',
    fontWeight: '100',
    fontSize: Dimens.toolbarTitle,
  },
});
