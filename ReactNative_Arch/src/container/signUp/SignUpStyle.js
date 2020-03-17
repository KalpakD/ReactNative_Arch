import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const SignUpStyle = StyleSheet.create({
  // style
  iContainerStyle: {
    backgroundColor: Theme.inputBackground,
    borderBottomWidth: 0,
    borderRadius: 8,
    marginTop: hp(1.5),
  },
  registerBtnStyle: {
    marginTop: hp(6),
    height: hp(6),
    borderRadius: 8,
    backgroundColor: '#8A0130',
    elevation: 6,
  },
  inputStyle: {color: Theme.txtLightxxxl, marginStart: wp(2)},
});
