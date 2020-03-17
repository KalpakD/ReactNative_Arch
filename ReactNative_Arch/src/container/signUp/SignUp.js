import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Theme, Styles, Dimens, Strings} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon, Input, Button} from 'react-native-elements';
import {SignUpStyle} from './SignUpStyle';

class SignUp extends Component {
  render() {
    return (
      <LinearGradient
        colors={[Theme.primaryColor, Theme.secondaryColor]}
        style={{flex: 1}}>
        <View style={[Styles.containerCenterY, {marginHorizontal: wp(6)}]}>
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
            style={{
              flex: 0.06,
              justifyContent: 'center',
              alignSelf: 'flex-start',
            }}
            onPress={() => this.props.navigation.pop()}>
            <Icon
              name="md-arrow-back"
              type="ionicon"
              color={Theme.bgColor}
              // size={hp(10)}
              containerStyle={{padding: 8}}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 0.94,
              //   backgroundColor: Theme.inputBackground,
              borderRadius: 10,
              marginVertical: hp(2),
            }}>
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
            <Input
              placeholder="Firstname"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'account',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Lastname"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'account',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Email"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'email',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Date of Birth"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'calendar',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              secureTextEntry
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Phone number"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'phone',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Password"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'lock',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              secureTextEntry
              inputStyle={SignUpStyle.inputStyle}
            />
            <Input
              placeholder="Confirm password"
              placeholderTextColor={Theme.placeholder}
              leftIcon={{
                type: 'material-community',
                name: 'lock',
                color: Theme.txtLightxxxl,
              }}
              containerStyle={SignUpStyle.iContainerStyle}
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              secureTextEntry
              inputStyle={SignUpStyle.inputStyle}
            />
            <Button
              title={Strings.REGISTER}
              buttonStyle={SignUpStyle.registerBtnStyle}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}
export default SignUp;
