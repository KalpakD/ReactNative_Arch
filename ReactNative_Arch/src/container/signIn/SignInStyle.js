import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const SignInStyle = StyleSheet.create({
  iContainerStyle: {
    backgroundColor: Theme.inputBackground,
    borderBottomWidth: 0,
    borderRadius: 8,
    marginTop: hp(1.5),
  },
  forgotPassStyle: {
    color: Theme.txtLightxxxl,
    alignSelf: 'flex-end',
    // marginTop: hp(3),
    // backgroundColor: 'yellow',
    padding: hp(3),
  },
  loginBtnStyle: {
    marginTop: hp(3),
    height: hp(6),
    borderRadius: 8,
    backgroundColor: '#8A0130',
    elevation: 6,
  },
  signUpStyle: {
    color: Theme.txtLightxxxl,
    marginTop: hp(8),
    padding: 10,
    alignSelf: 'center',
  },
  inputStyle: {color: Theme.txtLightxxxl, marginStart: wp(2)},
});
