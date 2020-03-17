import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Theme, Styles, Dimens, Strings} from '../theme';

class Splash extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.navigateToSignIn();
  }

  navigateToSignIn = () => {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 3000);
  };

  render() {
    return (
      <LinearGradient
        colors={[Theme.primaryColor, Theme.secondaryColor]}
        style={{flex: 1}}>
        <View style={Styles.containerCenterXY}>
          <Text
            style={{
              fontSize: Dimens.splashTitle,
              color: Theme.txtLightxxxl,
            }}>
            {Strings.appName}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
export default Splash;
