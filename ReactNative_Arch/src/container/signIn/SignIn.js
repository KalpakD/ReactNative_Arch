import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withNavigation} from 'react-navigation';
import {loginUser} from '../../actions/AuthActions';

import {SignInStyle} from './SignInStyle';
import {Theme, Styles, Dimens, Strings} from '../../theme';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      userName: '',
      password: '',
      email: '',
    };
  }
  toggleLoginState() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }
  _apiLogin() {
    let reqData = {
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log('Request ' + JSON.stringify(reqData));
    this.props.navigation.navigate('Dashboard');
    // this.props.loginUser(reqData);
  }
  _apiForgotPassword() {
    // callForgotPasswordApi
  }
  renderLoginContainer() {
    return (
      <View>
        <Input
          placeholder="Username"
          placeholderTextColor={Theme.placeholder}
          value={this.state.userName}
          autoCapitalize="none"
          onChangeText={userName => this.setState({userName})}
          leftIcon={{
            type: 'material-community',
            name: 'account',
            color: Theme.txtLightxxxl,
          }}
          containerStyle={SignInStyle.iContainerStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          inputStyle={SignInStyle.inputStyle}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={Theme.placeholder}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          leftIcon={{
            type: 'material-community',
            name: 'lock',
            color: Theme.txtLightxxxl,
          }}
          containerStyle={SignInStyle.iContainerStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          secureTextEntry
          inputStyle={SignInStyle.inputStyle}
        />
        <Text
          style={SignInStyle.forgotPassStyle}
          onPress={() => this.toggleLoginState()}>
          {Strings.FORGOT_PASSWORD}
        </Text>
      </View>
    );
  }
  renderForgotPassword() {
    return (
      <View>
        <Input
          placeholder="Email"
          placeholderTextColor={Theme.placeholder}
          value={this.state.email}
          autoCapitalize="none"
          onChangeText={email => this.setState({email})}
          leftIcon={{
            type: 'material-community',
            name: 'email',
            color: Theme.txtLightxxxl,
          }}
          keyboardType="email-address"
          containerStyle={SignInStyle.iContainerStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          inputStyle={SignInStyle.inputStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <LinearGradient
        colors={[Theme.primaryColor, Theme.secondaryColor]}
        style={{flex: 1}}>
        <View style={[Styles.containerCenterY, {margin: wp(6)}]}>
          <View style={{margin: hp(4), backgroundColor: 'transparent'}}>
            <Icon
              name="eventbrite"
              type="zocial"
              color={Theme.bgColor}
              size={hp(10)}
            />
            <Text
              style={{
                color: Theme.txtLightxxxl,
                alignSelf: 'center',
                fontStyle: 'italic',
              }}>
              Your app name or tagline
            </Text>
          </View>
          {this.state.isLogin
            ? this.renderLoginContainer()
            : this.renderForgotPassword()}
          <Button
            title={this.state.isLogin ? Strings.LOGIN : Strings.SUBMIT}
            buttonStyle={SignInStyle.loginBtnStyle}
            onPress={() =>
              this.state.isLogin ? this._apiLogin() : this._apiForgotPassword()
            }
          />
          <Text
            style={SignInStyle.signUpStyle}
            onPress={() => {
              this.state.isLogin
                ? this.props.navigation.navigate('SignUp')
                : this.toggleLoginState();
            }}>
            {this.state.isLogin ? Strings.CREATE_ACCOUNT : Strings.LOGIN}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
function mapStateToProps(state) {
  return {
    SignInReducer: state.SignInReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loginUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(SignIn));
