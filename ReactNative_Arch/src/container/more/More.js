import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Theme, Styles, Dimens, Strings} from '../../theme';
import KToolbar from '../../components/KToolbar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import KButton from './components/KButton';

class More extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar
          hidden={false}
          backgroundColor={Theme.primaryColor}
          barStyle="light-content"
        />
        <KToolbar title={Strings.MORE} isProfileVisible={false} />
        <View>
          <KButton
            title={Strings.NOTIFICATION}
            txtStyle={{fontSize: Dimens.txtMedium}}
          />
          <KButton
            title={Strings.ACCOUNT}
            txtStyle={{fontSize: Dimens.txtMedium}}
          />
          <KButton
            title={Strings.PAYMENT_OPTION}
            txtStyle={{fontSize: Dimens.txtMedium}}
          />
          <KButton
            title={Strings.ABOUT}
            txtStyle={{fontSize: Dimens.txtMedium}}
          />
          <KButton
            title={Strings.RATE_US}
            iconVisible={false}
            txtStyle={{color: Theme.txtDarkxl, fontSize: Dimens.txtNormal}}
            containerStyle={{paddingVertical: hp(1.2), marginTop: hp(1)}}
          />
          <KButton
            title={Strings.SEND_FEEDBACK}
            txtStyle={{color: Theme.txtDarkxl, fontSize: Dimens.txtNormal}}
            containerStyle={{paddingVertical: hp(1.2)}}
            iconVisible={false}
          />
          <KButton
            title={Strings.REPORT}
            iconVisible={false}
            containerStyle={{paddingVertical: hp(1.2)}}
            txtStyle={{color: Theme.txtDarkxl, fontSize: Dimens.txtNormal}}
          />
          <KButton
            title={Strings.LOGOUT}
            iconVisible={false}
            containerStyle={{paddingVertical: hp(1.2)}}
            txtStyle={{color: Theme.txtDarkxl, fontSize: Dimens.txtNormal}}
          />
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(Theme.rippleColor)}>
            <View style={styles.container}>
              <Icon
                name="ios-settings"
                type="ionicon"
                color={Theme.primaryColor}
                containerStyle={{padding: hp(1.8)}}
                // size={hp(3.5)}
              />
              <Text style={{fontSize: Dimens.txtMedium}}>
                {Strings.SETTINGS}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.bgColor,
    marginTop: 1,
    alignItems: 'center',
    // padding: hp(1.8),
  },
});
export default More;
